import React, { FC } from "react";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
type PropsType = {
  children: React.ReactNode;
  items: Array<{ id: string; [key: string]: any }>;
  onDragEnd: (oldIndex: number, newIndex: number) => void;
};
const SortableContainer: FC<PropsType> = (props) => {
  const { children, items, onDragEnd } = props;
  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 5 } }),
  );
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over === null) return;

    if (active.id !== over.id) {
      const oldIndex = items.findIndex((c) => c.id === active.id);
      const newIndex = items.findIndex((c) => c.id === over.id);
      onDragEnd(oldIndex, newIndex);
    }
  }
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {children}
      </SortableContext>
    </DndContext>
  );
};

export default SortableContainer;
