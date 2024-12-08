import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* <Button
          variant="outline"
          className="bg-transparent shadow-none border-none"
        > */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="15"
          height="30"
          viewBox="0 0 16 16"
          className="ml-8"
        >
          <path d="M 12.03125 2.023438 C 11.535156 2.023438 11.066406 2.269531 10.675781 2.65625 L 2.5625 10.726563 L 1.207031 14.785156 L 5.265625 13.433594 L 5.351563 13.351563 L 13.386719 5.367188 C 13.773438 4.976563 14.015625 4.507813 14.015625 4.011719 C 14.015625 3.515625 13.773438 3.046875 13.386719 2.65625 C 12.996094 2.269531 12.527344 2.023438 12.03125 2.023438 Z M 10.027344 4.710938 L 11.320313 6.007813 L 4.726563 12.5625 L 2.789063 13.207031 L 3.4375 11.265625 Z"></path>
        </svg>
        {/* </Button> */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="mb-4">Edit secondary name</DialogTitle>
          <DialogDescription>title:</DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input id="name" className="col-span-3" />
        </div>

        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DialogDemo;
