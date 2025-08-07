# Beyond the Edge: EDS React Boilerplate

This is a boilerplate for integrating ReactJS with Adobe Edge Delivery Services (EDS). This setup provides a robust development experience, combining the power of a modern JavaScript framework with the simplicity and performance of EDS.

## Key Features

- **Seamless EDS Integration**: Easly consume React components within the EDS block-based architecture.
- **Modern ES Module Bundling:** React components are built as optimized ES modules, enabling advanced features like code-splitting and lazy loading for faster page loads.
- **Optimized Development Workflow:** Uses a single command to run both the AEM dev server and the Vite build process. This ensures your local environment is always in sync, offering a fast and efficient workflow.
- **Production-Ready Builds:** Vite is configured to produce highly optimized, production-ready bundles, ensuring your React components are performant and lightweight in the live environment.
- **No Proxy Configuration Headaches:** Eliminated the need for complex proxy configurations by using Vite's watch mode, allowing the AEM dev server to directly serve the built files.

## Environments
- [Preview](https://main--eds-react--viltjs.aem.page/)
- [Live](https://main--eds-react--viltjs.aem.live/)

## Prerequisites

- [NodeJS](https://nodejs.org)
- [AEM CLI](https://www.npmjs.com/package/@adobe/aem-cli)

```sh
npm install -g @adobe/aem-cli
```

## Installation

```sh
npm i
```

## Linting

```sh
npm run lint
```

## Local development

```sh
npm start
```

## Structure

- `src/`: Source directory which will be bundled into distribution
- `src/app/`: React application with entry point file
- `src/scripts/`: These are automatically detected and processed by Vite during the build
- `public/`: Static assets that should be copied directly to the dist folder without any processing
- `dist/`: Output directory for the build process

## Create Your Own

1. Create a new repository based on this boilerplate and set mountpoint in `fstab.yaml`
2. Add the [AEM Code Sync GitHub App](https://github.com/apps/aem-code-sync) to the repository
3. Open it in your favorite IDE and be happy coding &#128522;

## Documentation

- [www.aem.live](https://www.aem.live/docs/)
- [experienceleague.adobe.com](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/edge-delivery/wysiwyg-authoring/authoring)
- [Getting Started](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/edge-delivery/wysiwyg-authoring/edge-dev-getting-started)
- [Creating Blocks](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/edge-delivery/wysiwyg-authoring/create-block)
- [Content Modelling](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/edge-delivery/wysiwyg-authoring/content-modeling)
- [The Anatomy of a Project](https://www.aem.live/developer/anatomy-of-a-project)
- [Web Performance](https://www.aem.live/developer/keeping-it-100)
- [Markup, Sections, Blocks, and Auto Blocking](https://www.aem.live/developer/markup-sections-blocks)
- [Getting started with AEM Authoring and Edge Delivery Services](https://experienceleague.adobe.com/en/docs/events/experience-manager-gems-recordings/gems2024/aem-authoring-and-edge-delivery)