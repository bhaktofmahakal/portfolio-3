"use client"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Trash2 } from "lucide-react"
import { useEffect, useState } from "react"

interface Submission {
  name: string
  email: string
  message: string
  timestamp: string
}

export default function Submissions() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    // Function to get submissions from localStorage with error handling
    const loadSubmissions = () => {
      try {
        // Load submissions from local storage
        const storedSubmissions = localStorage.getItem("contactSubmissions")
        if (storedSubmissions) {
          const parsedSubmissions = JSON.parse(storedSubmissions)
          // Validate the data structure
          if (Array.isArray(parsedSubmissions)) {
            setSubmissions(parsedSubmissions)
          } else {
            console.error("Invalid submissions data format")
            setSubmissions([])
          }
        }
      } catch (error) {
        console.error("Error loading submissions:", error)
        setSubmissions([])
      } finally {
        setIsLoading(false)
      }
    }

    loadSubmissions()
  }, [])

  // Function to delete a submission
  const deleteSubmission = (index: number) => {
    setIsDeleting(true)
    try {
      const updatedSubmissions = [...submissions]
      updatedSubmissions.splice(index, 1)
      setSubmissions(updatedSubmissions)
      localStorage.setItem("contactSubmissions", JSON.stringify(updatedSubmissions))
      
      toast({
        title: "Submission deleted",
        description: "The message has been removed successfully",
      })
    } catch (error) {
      console.error("Error deleting submission:", error)
      toast({
        title: "Error",
        description: "Failed to delete the submission",
        variant: "destructive",
      })
    } finally {
      setIsDeleting(false)
    }
  }

  if (isLoading) {
    return <div className="text-center py-4">Loading submissions...</div>
  }

  return (
    <div className="w-full">
      {submissions.length === 0 ? (
        <div className="text-center py-8 border border-dashed border-gray-700 rounded-md">
          <p className="text-gray-400">No submissions yet.</p>
          <p className="text-sm text-gray-500 mt-2">Messages from the contact form will appear here.</p>
        </div>
      ) : (
        <ul className="space-y-4">
          {submissions.map((submission, index) => (
            <li
              key={index}
              className="border border-gray-700 rounded-md p-4 bg-gray-800/30 hover:bg-gray-800/50 transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">{submission.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">{new Date(submission.timestamp).toLocaleString()}</span>
                  <Button 
                    onClick={() => deleteSubmission(index)}
                    disabled={isDeleting}
                    variant="ghost"
                    size="sm"
                    className="h-6 px-2 text-xs text-red-400 hover:text-red-300 hover:bg-red-900/20"
                    aria-label="Delete submission"
                  >
                    <Trash2 className="h-3 w-3 mr-1" />
                    Delete
                  </Button>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-2">{submission.email}</p>
              <p className="text-sm border-t border-gray-700 pt-2 mt-2">{submission.message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
