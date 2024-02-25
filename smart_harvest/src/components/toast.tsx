"use client"

import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

export function ToastWithAction({title, description, action}: Readonly<{title: string, description: string, action: React.ReactNode}>) {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title ,
          description,
          action: <ToastAction altText="Try again"> Ok </ToastAction>,
        })
      }}
    >
      Show Toast
    </Button>
  )
}
