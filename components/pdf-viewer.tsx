// components/pdf-viewer.tsx
"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type PdfViewerProps = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  src: string;      // e.g. "/docs/privacy-policy.pdf"
  title?: string;   // e.g. "Privacy Policy"
};

export function PdfViewer({ open, onOpenChange, src, title = "Document" }: PdfViewerProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl w-[95vw] h-[85vh] p-0 overflow-hidden">
        <DialogHeader className="px-4 py-3 border-b">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-base md:text-lg">{title}</DialogTitle>
            <div className="flex items-center gap-2">
              <Button asChild variant="outline" size="sm">
                <a href={src} download>
                  Download
                </a>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <a href={src} target="_blank" rel="noopener noreferrer">
                  Open in new tab
                </a>
              </Button>
            </div>
          </div>
        </DialogHeader>

        {/* Embedded PDF */}
        <iframe
          src={src}
          title={title}
          className="w-full h-[calc(85vh-56px)]" // subtract header height
        />
      </DialogContent>
    </Dialog>
  );
}
