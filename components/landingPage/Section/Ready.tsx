import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <div className="w-full py-24 px-6 bg-gradient-to-r from-purple-500 to-indigo-500 flex flex-col items-center text-center rounded-3xl shadow-lg">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Ready to Transform Your Meetings?
      </h2>

      <p className="text-white/90 max-w-2xl mb-8 text-lg">
        Join millions of users worldwide who trust ChatVibe for their video conferencing needs
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        <motion.div whileHover={{ scale: 1.05 }}>

        <Link href={'/dashboard'}>
          <Button className="bg-white text-purple-600 font-semibold px-8 py-6 text-base rounded-xl shadow-md flex items-center gap-2">
            <Rocket className="w-5 h-5" /> Start Free Trial
          </Button></Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Button
            variant="outline"
            className="border-white text-white px-8 py-6 text-base rounded-xl hover:bg-white/10"
          >
            Schedule Demo
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
