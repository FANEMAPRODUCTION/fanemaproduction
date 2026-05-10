"use client";

import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "@/components/project/ProjectCard";

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  coverUrl: string;
  tags: string[];
  creatorName: string;
  aspectRatio?: number;
};

type MasonryGridProps = {
  projects: ProjectItem[];
};

export default function MasonryGrid({ projects }: MasonryGridProps) {
  return (
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
      <AnimatePresence>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="break-inside-avoid"
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
