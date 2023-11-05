import { Button } from "./Button.jsx";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = (args) => <Button primary label="Primary" {...args} />;

export const Secondary = (args) => <Button label="Secondary" {...args} />;
export const Large = (args) => <Button size="large" label="Large" {...args} />;
export const Small = (args) => <Button size="small" label="Small" {...args} />;
