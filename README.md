# Design Engineer technical challenge @ MUI

This challenge is part of the hiring process for some positions at MUI.
The idea is to make as much progress as possible under a given time constraint of **3 to 4 hours**.

## Context

### About the company

MUI is a fully remote company with a team that spans the globe.
The majority of our work is asynchronous, and we rely on written communication to collaborate.
We're radically transparent: nearly all of our work happens in public.

For additional details about the culture you can check our [careers](https://mui.com/careers/) and [about](https://mui.com/about/) pages and also our [public Handbook](https://mui-org.notion.site/Handbook-f086d47e10794d5e839aef9dc67f324b).

### About the products

MUI is best known for our flagship product, Material UI—but this is just one of three core component libraries we maintain.
Base UI is our headless component library, and Joy UI is a sister library to Material UI that implements our own in-house Joy Design system.
We also host Design Kits and pre-built Templates.

Beyond the core libraries, MUI X offers advanced components like the Data Grid, Date and Time Pickers, and Charts, for more complex user interactions and data visualization needs.

We're also making ambitious moves to incorporate our full suite of components into Toolpad, a low-code admin builder tool for assembling full-stack apps faster than ever.

Learn more about MUI's products in this blog post: [An introduction to the MUI ecosystem](https://mui.com/blog/mui-product-comparison/).

## The challenge

Given that the Design Engineer position sits right at the intersection between engineering and design, this challenge aims at simulating how a potential day-to-day situation plays out.
Our challenge is to **develop a stacked Snackbar** component.
We'll review how you make design decisions and the quality of the written code.

Here's an example design:

<img alt="Snackbars example design" src="./public/snackbar-reference.gif" width="465" height="392" />

We encourage you to add your creative spin to the design—we want to see your design taste!

### Requirements

- **Stack:** Use the Base UI [Snackbar](https://mui.com/base-ui/react-snackbar/) or a similar headless component from a library of your choice as the foundation.
- **Transitions:** the Snackbars should appear and disappear gracefully on the screen, using an animation.
- **Dark mode:** make sure to support light and dark modes.
- **Interactivity:**
  - The other Snackbar instances should be visible after some interaction, either clicking a button or hovering over the stack.
  - They should stay open when focused, and collapse when the focus moves away.
  - Each instance should have a functional close button.
  - _Bonus:_ Add an option to make the Snackbars close automatically after some configurable time interval. This should be compatible with [WCAG 2.2.1](https://www.w3.org/TR/WCAG21/#enough-time).

### Work environment

To save you time, we created a working environment with Next.js, TypeScript, ESLint, and other complementary dependencies.
Follow the steps:

- Clone the repo: `git clone git@github.com:mui/tech-challenge-design-engineer.git`
- Install the dependencies: `pnpm i`
- Start Next.js: `pnpm dev`
- Open http://0.0.0.0:3002/

## Submission instructions

- **DO NOT** host your project on a public repository.
- Please send us a .zip file containing this project using the upload link we provided by email (**with** the _.git_ folder).
- To significantly reduce the size of the file, remove the `/_node_modules_/` and `/.next/` folders.
- If you don't have the upload link, send it to job@mui.com.

We're excited and looking forward to seeing what you'll create!
Good luck 🚀
