import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full px-4 my-20">
      <div
        className="
          relative max-w-7xl mx-auto
          rounded-3xl overflow-hidden
          bg-white/5 backdrop-blur-md
          border border-white/10
          shadow-2xl shadow-purple-500/20
          py-20 px-6 md:px-12
          text-center
        "
      >
        {/* Soft glow background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Ready to Transform Your Meetings?
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
          Join millions of users worldwide who trust ChatVibe for their video conferencing needs
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/dashboard">
              <Button
                className="
                  bg-gradient-to-r from-purple-600 to-blue-600
                  hover:opacity-90
                  text-white font-semibold
                  px-8 py-6 text-base rounded-xl
                  shadow-lg shadow-purple-500/20
                  flex items-center gap-2
                "
              >
                <Rocket className="w-5 h-5" /> Start Free Trial
              </Button>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              variant="outline"
              className="
                bg-white/5
                border border-white/20
                text-white
                px-8 py-6 text-base rounded-xl
                hover:bg-white/10
              "
            >
              Schedule Demo
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
