# 🍵 Racinfo

An unofficial webpage with information about Real Address Chat protocol made with Next.js.
This is a personal project and is not affiliated with the original Real Address Chat developer.

[Live in production website](https://racinfo.kostyazero.com)

## Features

- List of client, server and development tools for Real Address Chat.
- Comprehensive documentation of the Real Address Chat protocol and its successors.
- List of known User Agents with their regular expressions and colors.
- Packed with modern and sleek design, looks great on mobile devices.

## Host your Racinfo

It is strongly recommended to use Docker to host Racinfo. You can use the following command to run it:

```bash
docker build -t racinfo .
docker up -d -p 8085:8085 racinfo
```

By default, Racinfo runs on port 8085. You can change this by using the -p flag with the docker run command, like this:

```bash
# Instead of 8085, you can use any port you want, like 3000
docker up -d -p 3000:8085 racinfo
```

But if you don't want to use Docker, you can run it with local Node.js installation:

```bash
corepack enable pnpm && corepack install -g pnpm@latest
pnpm install 
pnpm build

# Replace 8085 with the port that you want to use
pnpm start --port 8085
```

## Contributing

If you are a developer of a client, server of development tool for Real Address Chat, you can contribute to Racinfo by adding your tool to the list. 
You can also contribute by improving the documentation or fixing bugs.

**Any pull requests related to adding/updating/removal projects information will be rejected.**

Also, you should get acknowledged with these rules before contributing:

- The project should be related to the Real Address Chat protocol or its successors.
- Your project should have a Git repository or a link to its download page. We do not accept projects that are not hosted on Git or do not provide a download link.

If you want to add your project to the list, please follow these steps:

1. Open an Issue on the [GitHub repository](https://github.com/kostya-zero/racinfo) by using the template **"Add Project"** where you need to replace `Project` with your project name.
2. Attach `add-client`, `add-server` or `add-tool` tag to the issue.
3. Fill the issue template with the information about your tool as described in template.

If you are the author or maintainer of a project already listed in Racinfo, you can also open an issue using the **"Update Project"** template to update your project information.
