import { Card, Image, Group, Badge, Text } from "@mantine/core";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface FavoriteCardProps {
  category: string;
  name: string;
  link: string;
}

export default function FavoriteCard({
  category,
  name,
  link,
}: FavoriteCardProps) {
  return (
    <Card title={name} shadow="sm" radius="md" withBorder>
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{name}</Text>
      </Group>
    </Card>
  );
}
