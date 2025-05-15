export function SuccessMessage({ onReset }: SuccessMessageProps) {
  return (
    <Card className="text-center">
      <CardContent className="pt-6 pb-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="rounded-full bg-green-100 p-3">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold">Application Submitted!</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Thank you for your application. We've sent a confirmation to your email 
            and will contact you shortly about your space travel adventure.
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center pb-6">
        <Button onClick={onReset}>Submit Another Application</Button>
      </CardFooter>
    </Card>
  );
}
