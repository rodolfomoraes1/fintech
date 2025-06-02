import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "link"],
      description: "Estilo visual do botão",
    },
    children: {
      control: "text",
      description: "Conteúdo do botão",
    },
    disabled: {
      control: "boolean",
      description: "Estado desabilitado",
    },
    className: {
      control: "text",
      description: "Classes CSS adicionais",
    },
    onClick: {
      action: "clicked",
      description: "Handler de clique",
    },
  },
  args: {
    children: "Button Text",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link Style Button",
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    children: "Disabled Button",
    disabled: true,
  },
};

export const CustomClasses: Story = {
  args: {
    variant: "primary",
    children: "Custom Styled",
    className: "w-full bg-gradient-to-r from-blue-500 to-purple-600",
  },
};

export const WithIcon: Story = {
  render: (args) => (
    <Button {...args}>
      <span className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
        Button with Icon
      </span>
    </Button>
  ),
  args: {
    variant: "secondary",
  },
};
