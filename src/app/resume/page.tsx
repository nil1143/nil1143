import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <FileText className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Resume</h1>
          </div>
          <div className="flex gap-3">
            <Button asChild variant="outline">
              <Link href="/">Back to Portfolio</Link>
            </Button>
            <Button asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="border rounded-lg overflow-hidden shadow-lg bg-background">
          <iframe
            src="/resume.pdf"
            className="w-full h-[calc(100vh-180px)] min-h-[600px]"
            title="Resume PDF"
          />
        </div>

        {/* Mobile fallback message */}
        <div className="mt-4 text-center text-sm text-muted-foreground">
          <p>If the PDF doesn&apos;t display properly, click the download button above.</p>
        </div>
      </div>
    </div>
  );
}
