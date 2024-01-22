import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

interface Props {
  isOpen: boolean;
  handleClose: any;
}

export default function CustomDialog({ isOpen, handleClose }: Props) {
  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      {/* Note: This Button is commented for triggering Dialog from Parent */}
      {/* <DialogTrigger>Open</DialogTrigger> */}

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>

        {/* Custom Button for Closing Dialog Box */}
        <button type="button" onClick={handleClose}>
          Close Me
        </button>
      </DialogContent>
    </Dialog>
  );
}
