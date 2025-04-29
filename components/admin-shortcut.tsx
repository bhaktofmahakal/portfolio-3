"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function AdminShortcut() {
  const router = useRouter()
  
  useEffect(() => {
    // Enhanced security with your personal key sequence
    // This requires a specific sequence of keys to be pressed in order
    const secretCode = ['u', 't', 's', 'a', 'v']; // Your name as the secret code
    let keySequence: string[] = [];
    let ctrlPressed = false;
    let shiftPressed = false;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      // Track modifier keys
      if (e.key === "Control") ctrlPressed = true;
      if (e.key === "Shift") shiftPressed = true;
      
      // Only proceed if both Ctrl and Shift are pressed (this makes it harder to discover)
      if (ctrlPressed && shiftPressed) {
        // Add the key to the sequence
        if (e.key.length === 1) { // Only single character keys
          keySequence.push(e.key.toLowerCase());
          
          // Keep only the last N keys where N is the length of our secret code
          if (keySequence.length > secretCode.length) {
            keySequence = keySequence.slice(-secretCode.length);
          }
          
          // Check if the sequence matches our secret code
          const isMatch = keySequence.join('') === secretCode.join('');
          
          if (isMatch) {
            // Clear the sequence immediately for security
            keySequence = [];
            
            // Navigate to admin page
            router.push("/dashboard-secret-utsav");
          }
        }
      }
    }
    
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "Control") ctrlPressed = false;
      if (e.key === "Shift") shiftPressed = false;
      
      // If either modifier key is released, clear the sequence for security
      if (e.key === "Control" || e.key === "Shift") {
        keySequence = [];
      }
    }
    
    // Add event listeners
    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keyup", handleKeyUp)
    
    // Clean up
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("keyup", handleKeyUp)
    }
  }, [router])
  
  return null // This component doesn't render anything
}