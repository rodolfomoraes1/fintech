import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AdvantageCard } from "./advantage-card";

const meta: Meta<typeof AdvantageCard> = {
  title: "Components/AdvantageCard",
  component: AdvantageCard,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Título do card",
    },
    description: {
      control: "text",
      description: "Descrição do benefício",
    },
    imageWidth: {
      control: { type: "number", min: 10, max: 200, step: 1 },
      table: {
        disable: true, // Escondemos pois não usaremos imagens
      },
    },
    imageHeight: {
      control: { type: "number", min: 10, max: 200, step: 1 },
      table: {
        disable: true, // Escondemos pois não usaremos imagens
      },
    },
    className: {
      control: "text",
      description: "Classes CSS adicionais",
    },
  },
  args: {
    // Valores padrão que substituem as imagens
    imageAlt: "Ícone ilustrativo",
    imageSrc: "", // String vazia
  },
};

export default meta;
type Story = StoryObj<typeof AdvantageCard>;

// Componente de placeholder para a imagem
const ImagePlaceholder = ({
  width = 73,
  height = 56,
}: {
  width?: number;
  height?: number;
}) => (
  <div
    style={{
      width: `${width}px`,
      height: `${height}px`,
      backgroundColor: "#e2e8f0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "8px",
      color: "#718096",
      fontSize: "12px",
    }}
  >
    Ícone
  </div>
);

// Story básico com placeholder
export const Default: Story = {
  render: (args) => (
    <AdvantageCard {...args} imageSrc={"../../../../fintech/login.png"} />
  ),
  args: {
    title: "Entrega Rápida",
    description: "Receba seu pedido em até 24h",
  },
};

// Story com estilo customizado
export const CustomStyle: Story = {
  render: (args) => (
    <AdvantageCard {...args} imageSrc={"../../../../fintech/login.png"} />
  ),
  args: {
    title: "Segurança",
    description: "Seus dados protegidos com criptografia",
    className: "bg-gray-50 p-4 rounded-lg",
  },
};
