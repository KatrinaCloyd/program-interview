# The Program Interview Exercise

## Building React Components in Next.js

### Get Started

Install packages.

```bash
yarn
```

Start up local server.

```bash
yarn start
```

Go to `localhost:3000` in your favorite browser.

### Assignment

1. HomePage:

   - Render a title element with `title` prop value
   - Render a meta element for description with `description` prop value
   - Replace the paragraph of "Hello" with the `Section` component and provide its props

2. Section Component

   - Render all `Card` components and provide their props appropriately

3. Card Component

   - Render a heading level 2 element with `name` prop value
   - Render a paragraph element with `title` prop value

4. Card Styling

   - Inner content has _column_ layout
   - Padding uses property `--spacing`
   - Background of property `--foreground`
   - Rounded corners of 6px
   - Has shadow with `shadow` func, level 1
   - Heading font size 1.2 times the root size
   - Heading color of property `--primary`
   - Hover: Shadow level 2
   - Hover: Heading color of property `--accent`
