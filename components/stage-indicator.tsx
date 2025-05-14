import { User, Briefcase, Heart } from "lucide-react"

interface StageIndicatorProps {
  currentStage: number
}

export function StageIndicator({ currentStage }: StageIndicatorProps) {
  const stages = [
    { number: 1, title: "Personal Information", icon: <User className="h-4 w-4" /> },
    { number: 2, title: "Travel Preferences", icon: <Briefcase className="h-4 w-4" /> },
    { number: 3, title: "Health and Safety", icon: <Heart className="h-4 w-4" /> },
  ]

  return (
    <div className="flex flex-col sm:flex-row justify-between mb-8">
      {stages.map((stage) => (
        <div
          key={stage.number}
          className={`flex items-center space-x-2 mb-4 sm:mb-0 ${
            currentStage === stage.number
              ? "text-primary"
              : currentStage > stage.number
                ? "text-muted-foreground"
                : "text-muted-foreground opacity-70"
          }`}
        >
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
              currentStage === stage.number
                ? "bg-primary text-primary-foreground"
                : currentStage > stage.number
                  ? "bg-primary/20 text-primary"
                  : "bg-muted text-muted-foreground"
            }`}
          >
            {stage.icon}
          </div>
          <span className="font-medium hidden sm:inline">{stage.title}</span>
          <span className="font-medium sm:hidden">{stage.number}</span>

          {stage.number < 3 && <div className="hidden sm:block h-[2px] w-12 bg-muted mx-2" />}
        </div>
      ))}
    </div>
  )
}
