"use client";

import { Card, CardContent, CardActions, Button } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  actions: [];
  id: string;
}

export default function ProjectCard({ title, actions, id }: ProjectCardProps) {
  return (
    <Card>
      <CardContent className="flex flex-row gap-4">
        <PublicIcon className="mt-1" />
        <div className="flex flex-col gap2">
          <h4 className="font-medium text-lg">{title}</h4>
          <p className="text-sm text-gray-600">{actions.length} Actions</p>
        </div>
      </CardContent>
      <CardActions className="justify-end">
        <Link href={`/project/${id}`}>
          <Button size="small">
            Manage <OpenInNewIcon fontSize="small" className="ml-2" />
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
