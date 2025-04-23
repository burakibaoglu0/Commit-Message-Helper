interface CommitMessage {
  type: string;
  scope?: string;
  description: string;
  body?: string;
  footer?: string;
}

export function generateCommitMessage({
  type,
  scope,
  description,
  body,
  footer,
}: CommitMessage): string {
  let message = "type(scope): description";

  const requiredFields: [string, string | undefined][] = [
    ["type", type],
    ["scope", scope],
    ["description", description],
  ];

  for (const [key, value] of requiredFields) {
    if (value) {
      message = message.replace(key, value);
    }
  }

  const extras = [body, footer].filter(Boolean);
  extras.forEach((part) => {
    message += `\n\n${part}`;
  });

  return message;
}
