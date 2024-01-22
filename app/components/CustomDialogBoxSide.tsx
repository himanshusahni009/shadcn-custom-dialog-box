import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/CustomDialogBoxSideBase";

interface Props {
  isOpen: boolean;
  handleClose: any;
}

/* This is Custom Dialog Box with alignment Side. 
Note down the changes has been in classNames in Dialog File  */
export default function CustomDialogBoxSide({ isOpen, handleClose }: Props) {
  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      {/* Note: This Button is commented for triggering Dialog from Parent */}
      {/* <DialogTrigger>Open</DialogTrigger> */}

      <DialogContent className="h-screen">
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
