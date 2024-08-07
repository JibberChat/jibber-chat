import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface EditRoomProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  handleEditRoom: (e: React.FormEvent<HTMLFormElement>) => void;
}

const EditRoom: React.FC<Readonly<EditRoomProps>> = ({ isOpen, setIsOpen, handleEditRoom }) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit room</DialogTitle>
          <DialogDescription>Change the name of the room here.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleEditRoom}>
          <div className="grid gap-4 py-4">
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="roomName" className="text-right">
                Name
              </Label>
              <Input id="roomName" name="roomName" placeholder="Room name" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditRoom;
