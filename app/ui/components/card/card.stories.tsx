import { Meta, StoryObj } from "@storybook/nextjs-vite";
import Card from "./card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["dark", "gray", "ice"],
      description: "Variante de cor do card",
    },
    children: {
      control: "text",
      description: "Conteúdo do card",
    },
    className: {
      control: "text",
      description: "Classes CSS adicionais",
    },
  },
  args: {
    children: "Conteúdo do card",
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const DarkVariant: Story = {
  args: {
    variant: "dark",
    children: "Card com fundo escuro",
  },
};

export const GrayVariant: Story = {
  args: {
    variant: "gray",
    children: "Card com fundo cinza",
  },
};

export const IceVariant: Story = {
  args: {
    variant: "ice",
    children: "Card com fundo gelo",
  },
};

export const WithCustomContent: Story = {
  render: (args) => (
    <Card {...args}>
      <h3 className="text-2xl font-bold">Título do Card</h3>
      <p className="mt-2">Este é um card com conteúdo customizado</p>
      <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
        Ação
      </button>
    </Card>
  ),
};

export const WithAdditionalClasses: Story = {
  args: {
    variant: "dark",
    className: "shadow-lg border-2 border-white",
    children: "Card com classes adicionais (sombra e borda)",
  },
};

export const ResponsiveCard: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Card variant="dark">
        <h3 className="text-xl font-bold">Card 1</h3>
        <p className="mt-2">Conteúdo responsivo</p>
      </Card>
      <Card variant="gray">
        <h3 className="text-xl font-bold">Card 2</h3>
        <p className="mt-2">Grid adaptável</p>
      </Card>
    </div>
  ),
};
