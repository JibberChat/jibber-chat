import type { ChatRoom } from "@/__generated__/graphql";
import { useChat } from "@/contexts/ChatContext";
import { useRooms } from "@/contexts/RoomsContext";
import { Plus } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Groups: React.FC = () => {
  const { setRoom } = useChat();
  const { rooms, createNewRoom } = useRooms();
  const [isOpen, setIsOpen] = useState(false);

  const handleCreateRoom = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = e.currentTarget.roomName?.value;
    if (!name) return;

    await createNewRoom({ name });

    setIsOpen(false);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Rooms:</h2>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Plus className="h-4 w-4" />
              <span className="sr-only">Add Room</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add a new room</DialogTitle>
              <DialogDescription>Fill out the form to create a new room.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleCreateRoom}>
              <div className="grid gap-4 py-4">
                <div className="grid items-center grid-cols-4 gap-4">
                  <Label htmlFor="roomName" className="text-right">
                    Name
                  </Label>
                  <Input id="roomName" name="roomName" placeholder="Room name" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Create Room</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {rooms?.map((room: ChatRoom) => (
          <Button key={room.id} variant="outline" className="w-full justify-start" onClick={() => setRoom(room)}>
            {room.name}
          </Button>
        ))}
      </div>
    </div>
  );
};
