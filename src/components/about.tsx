import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About{" "}
            <span className="bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
              TECHMATE EDUSERVE
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-3xl mx-auto">
            We are an innovative EdTech company dedicated to transforming
            educational institutions through cutting-edge technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              TECHMATE EDUSERVE LLP is a leading provider of educational
              technology solutions designed to streamline operations, enhance
              learning experiences, and drive digital transformation in
              educational institutions.
            </p>

            <p className="text-lg">
              Our mission is to empower schools, colleges, and universities with
              innovative software solutions that address the evolving needs of
              modern education.
            </p>

            <div className="w-full flex justify-center items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="flex justify-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5" />
                  <span>Innovative Solutions</span>
                </div>
                <div className="flex justify-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5" />
                  <span>Expert Team</span>
                </div>
                <div className="flex justify-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5" />
                  <span>Customized Approach</span>
                </div>
                <div className="flex justify-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5" />
                  <span>Continuous Support</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600/20 via-teal-500/20 to-blue-600/20 p-1 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 via-teal-500/80 to-blue-600/80 opacity-20 blur-3xl"></div>
              <div className="h-full w-full rounded-xl bg-muted flex items-center justify-center p-8">
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="bg-background/90 rounded-lg p-4 text-center shadow-md">
                    <div className="text-3xl font-bold text-purple-600">2+</div>
                    <div className="text-sm mt-1">Years Experience</div>
                  </div>
                  <div className="bg-background/90 rounded-lg p-4 text-center shadow-md">
                    <div className="text-3xl font-bold text-teal-500">100+</div>
                    <div className="text-sm mt-1">Clients</div>
                  </div>
                  <div className="bg-background/90 rounded-lg p-4 text-center shadow-md">
                    <div className="text-3xl font-bold text-blue-600">50+</div>
                    <div className="text-sm mt-1">Team Members</div>
                  </div>
                  <div className="bg-background/90 rounded-lg p-4 text-center shadow-md">
                    <div className="text-3xl font-bold text-purple-600">7</div>
                    <div className="text-sm mt-1">Solutions</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-purple-600/30 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-teal-500/30 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
