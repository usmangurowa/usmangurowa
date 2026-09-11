import React, { type ReactNode } from "react";
import { PageNumber, TotalPages } from "takumi-pdf/primitives";
import type { ResumeVariant } from "../../data/resumes";
import { career } from "../../data/career";
import { type Career, bulletText, dateRange, selectedProjects } from "../../lib/pdf/data";
import { pdfTheme as theme } from "../../lib/pdf/theme";
import { Heading } from "./pdfcn/heading";
import { Text } from "./pdfcn/text";
import { View, flatten } from "./pdfcn/primitives";

function Link({ href, children }: { href?: string; children: ReactNode }) {
  return <Text noMargin href={href} style={{ color: theme.colors.ink }}>{children}</Text>;
}

function Emphasis({ children }: { children: ReactNode }) {
  return <Text noMargin weight="semibold">{children}</Text>;
}

function Section({ title, children }: { title: string; children: ReactNode[] }) {
  // A heading and its first complete item are a single pagination unit.
  const [first, ...rest] = children;
  return (
    <View>
      <View wrap={false}><Heading>{title}</Heading>{first}</View>
      {rest}
    </View>
  );
}

function Job({ job, bullets }: { job: Career["work"][number]; bullets: string[] }) {
  return (
    <View wrap={false} style={{ marginBottom: theme.entryGap }}>
      <Text noMargin>
        <Emphasis>{job.role}</Emphasis>{" — "}<Link href={job.href}>{job.company}</Link>
        <Text noMargin style={{ color: theme.colors.muted }}>{" | "}{dateRange(job.start, job.end)}</Text>
      </Text>
      {bullets.map((id) => (
        <Text key={id} noMargin style={{ marginLeft: 10, marginTop: 1, textIndent: -8, paddingLeft: 8 }}>
          {"– "}{bulletText(job, id)}
        </Text>
      ))}
    </View>
  );
}

function Project({ project }: { project: Career["projects"][number] }) {
  return (
    <View wrap={false} style={{ marginBottom: theme.entryGap }}>
      <Text noMargin>
        <Emphasis>{project.name}</Emphasis>
        <Text noMargin style={{ color: theme.colors.muted }}>{" | "}{project.when}</Text>
        {project.links.map((link) => (
          <React.Fragment key={link.href}>{" | "}<Link href={link.href}>{link.label}</Link></React.Fragment>
        ))}
      </Text>
      <Text noMargin>{project.blurb}</Text>
      <Text noMargin><Emphasis>Stack: </Emphasis>{project.stack.join(", ")}</Text>
    </View>
  );
}

export function ResumeDocument({ variant, data = career }: { variant: ResumeVariant; data?: Career }) {
  return (
    <main lang="en" style={flatten({
      fontFamily: theme.fonts.body, fontSize: theme.bodySize,
      lineHeight: theme.lineHeight, color: theme.colors.ink,
      display: "flex", flexDirection: "column",
    })}>
      <View wrap={false}>
        <Heading level={1}>{data.name}</Heading>
        <Text style={{ fontSize: 12, marginTop: 3, marginBottom: 5 }}>{variant.title}</Text>
        <Text noMargin>
          <Link href={`mailto:${data.email}`}>{data.email}</Link>{" | "}
          <Link href={`tel:${data.phone.replaceAll(" ", "")}`}>{data.phone}</Link>
          {" | "}{data.location}
        </Text>
        <Text noMargin>
          <Link href={data.url}>{data.url.replace(/^https?:\/\//, "")}</Link>{" | "}
          <Link href={data.socials.github}>GitHub</Link>{" | "}
          <Link href={data.socials.linkedin}>LinkedIn</Link>
        </Text>
      </View>
      <Section title="Summary">
        {[<Text key="summary" noMargin>{variant.summary}</Text>]}
      </Section>
      <Section title="Skills">
        {variant.skills.map((group) => (
          <Text key={group.label} noMargin>
            <Emphasis>{group.label}: </Emphasis>{group.items.join(", ")}
          </Text>
        ))}
      </Section>
      <Section title="Experience">
        {data.work.map((job) => <Job key={job.id} job={job} bullets={variant.bullets[job.id]} />)}
      </Section>
      <Section title="Selected projects">
        {selectedProjects(data, variant).map((project) => <Project key={project.id} project={project} />)}
      </Section>
      <Section title="Education">
        {data.education.map((item) => (
          <View key={item.name} wrap={false} style={{ marginBottom: theme.paragraphGap }}>
            <Text noMargin>
              <Emphasis>{item.name}</Emphasis>
              <Text noMargin style={{ color: theme.colors.muted }}>{" | "}{dateRange(item.start, item.end)}</Text>
            </Text>
            <Text noMargin>
              <Link href={item.href}>{item.detail}</Link>{item.note ? ` — ${item.note}` : ""}
            </Text>
          </View>
        ))}
      </Section>
      <Section title="Recognition">
        {[<Text key="award" noMargin>{data.award}</Text>]}
      </Section>
    </main>
  );
}

export function ResumeFooter({ variant, data = career }: { variant: ResumeVariant; data?: Career }) {
  return (
    <View style={{
      marginLeft: theme.margin, marginRight: theme.margin,
      paddingBottom: theme.footerInset,
      paddingTop: 6, borderTopWidth: 0.5, borderTopStyle: "solid", borderTopColor: theme.colors.rule,
      flexDirection: "row", justifyContent: "space-between",
      fontFamily: theme.fonts.body, fontSize: theme.bodySize, lineHeight: theme.lineHeight,
    }}>
      <Text noMargin style={{ color: theme.colors.muted }}>{data.name} / {variant.label}</Text>
      <Text noMargin style={{ color: theme.colors.muted }}>
        <PageNumber />{" / "}<TotalPages />
      </Text>
    </View>
  );
}
