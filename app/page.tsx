import ApplicationForm from "@/components/application-form"

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-8">Space Travel Application</h1>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Complete this application form to begin your journey to space. Please provide accurate information for all
          required fields.
        </p>
        <ApplicationForm />
      </div>
    </main>
  )
}
