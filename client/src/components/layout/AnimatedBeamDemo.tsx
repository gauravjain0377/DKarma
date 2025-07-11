"use client";
import React, { forwardRef, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { SparklesIcon } from "@heroicons/react/24/solid";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 p-3 shadow-[0_0_20px_-12px_rgba(168,85,247,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const freelancerRef = useRef<HTMLDivElement>(null);
  const clientRef = useRef<HTMLDivElement>(null);
  const blockchainRef = useRef<HTMLDivElement>(null);
  const smartContractRef = useRef<HTMLDivElement>(null);
  const tokenRef = useRef<HTMLDivElement>(null);
  const ipfsRef = useRef<HTMLDivElement>(null);
  const walletRef = useRef<HTMLDivElement>(null);
  const daoRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.08),transparent_50%)]" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <SparklesIcon className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-slate-300">
              Platform Architecture
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            How Dkarma Connects
            <br />
            <span className="bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent">
              Freelancers & Clients
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-300 leading-relaxed">
            A visual journey of secure, decentralized collaboration on our
            platform with trustless payments and global accessibility.
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="w-3 h-3 rounded-full bg-gradient-to-br from-[var(--color-success)] to-emerald-700 border border-[var(--color-border)]" />
            <span className="text-slate-300 text-sm font-medium">Freelancer</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="w-3 h-3 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-cyan-700 border border-[var(--color-border)]" />
            <span className="text-slate-300 text-sm font-medium">Client</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="w-3 h-3 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 border border-[var(--color-border)]" />
            <span className="text-slate-300 text-sm font-medium">Escrow Contract</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="w-3 h-3 rounded-full bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-border)] border border-[var(--color-border)]" />
            <span className="text-slate-300 text-sm font-medium">Infrastructure</span>
          </div>
        </motion.div>

        {/* Animated Beams Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--color-surface)] to-black/20 border border-[var(--color-border)] backdrop-blur-sm shadow-2xl"
          ref={containerRef}
        >
          <div className="flex size-full max-h-[350px] max-w-5xl flex-col items-stretch justify-between gap-8 p-8">
            {/* Top row - Freelancers and Clients */}
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-col items-center">
                <Circle
                  ref={freelancerRef}
                  className="bg-gradient-to-br from-[var(--color-success)] to-emerald-700 border-[var(--color-success)] shadow-lg shadow-emerald-500/20"
                >
                  <Icons.freelancer />
                </Circle>
                <span className="mt-2 text-xs text-[var(--color-success)] font-semibold font-display">
                  Freelancer
                </span>
              </div>
              <div className="flex flex-col items-center">
                <Circle
                  ref={clientRef}
                  className="bg-gradient-to-br from-[var(--color-primary)] to-cyan-700 border-[var(--color-primary)] shadow-lg shadow-blue-500/20"
                >
                  <Icons.client />
                </Circle>
                <span className="mt-2 text-xs text-[var(--color-primary)] font-semibold font-display">
                  Client
                </span>
              </div>
            </div>

            {/* Middle row - Core platform */}
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-col items-center">
                <Circle
                  ref={walletRef}
                  className="bg-gradient-to-br from-orange-400 to-orange-700 border-orange-400 shadow-lg shadow-orange-500/20"
                >
                  <Icons.wallet />
                </Circle>
                <span className="mt-2 text-xs text-orange-400 font-semibold font-display">
                  Wallet
                </span>
              </div>
              <div className="flex flex-col items-center">
                <Circle
                  ref={smartContractRef}
                  className="size-20 bg-gradient-to-br from-purple-600 to-pink-600 border-purple-600 shadow-lg shadow-purple-500/20"
                >
                  <Icons.smartContract />
                </Circle>
                <span className="mt-2 text-xs text-purple-400 font-semibold font-display">
                  Escrow Contract
                </span>
              </div>
              <div className="flex flex-col items-center">
                <Circle
                  ref={ipfsRef}
                  className="bg-gradient-to-br from-[var(--color-primary-hover)] to-[var(--color-border)] border-[var(--color-primary-hover)] shadow-lg shadow-cyan-500/20"
                >
                  <Icons.ipfs />
                </Circle>
                <span className="mt-2 text-xs text-[var(--color-primary-hover)] font-semibold font-display">
                  IPFS
                </span>
              </div>
            </div>

            {/* Bottom row - Blockchain infrastructure */}
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-col items-center">
                <Circle
                  ref={blockchainRef}
                  className="bg-gradient-to-br from-yellow-400 to-yellow-700 border-yellow-400 shadow-lg shadow-yellow-500/20"
                >
                  <Icons.blockchain />
                </Circle>
                <span className="mt-2 text-xs text-yellow-400 font-semibold font-display">
                  Blockchain
                </span>
              </div>
              <div className="flex flex-col items-center">
                <Circle
                  ref={tokenRef}
                  className="bg-gradient-to-br from-pink-500 to-rose-600 border-pink-500 shadow-lg shadow-pink-500/20"
                >
                  <Icons.token />
                </Circle>
                <span className="mt-2 text-xs text-pink-400 font-semibold font-display">
                  Token
                </span>
              </div>
              <div className="flex flex-col items-center">
                <Circle
                  ref={daoRef}
                  className="bg-gradient-to-br from-teal-400 to-cyan-600 border-teal-400 shadow-lg shadow-teal-500/20"
                >
                  <Icons.dao />
                </Circle>
                <span className="mt-2 text-xs text-teal-400 font-semibold font-display">
                  DAO
                </span>
              </div>
            </div>
          </div>

          {/* Animated Beams */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={freelancerRef}
            toRef={smartContractRef}
            curvature={-75}
            endYOffset={-10}
            gradientStartColor="var(--color-success)"
            gradientStopColor="var(--color-primary-hover)"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={clientRef}
            toRef={smartContractRef}
            curvature={75}
            endYOffset={-10}
            gradientStartColor="var(--color-primary)"
            gradientStopColor="var(--color-primary-hover)"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={walletRef}
            toRef={smartContractRef}
            gradientStartColor="#f59e42"
            gradientStopColor="var(--color-primary-hover)"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={ipfsRef}
            toRef={smartContractRef}
            gradientStartColor="var(--color-primary-hover)"
            gradientStopColor="var(--color-primary)"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={smartContractRef}
            toRef={blockchainRef}
            curvature={-60}
            endYOffset={10}
            reverse
            gradientStartColor="var(--color-primary-hover)"
            gradientStopColor="#fde047"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={smartContractRef}
            toRef={tokenRef}
            endYOffset={10}
            reverse
            gradientStartColor="var(--color-primary-hover)"
            gradientStopColor="#fb7185"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={smartContractRef}
            toRef={daoRef}
            curvature={60}
            endYOffset={10}
            reverse
            gradientStartColor="var(--color-primary-hover)"
            gradientStopColor="#2dd4bf"
          />
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="group bg-gradient-to-br from-[var(--color-surface)] to-black/20 backdrop-blur-sm border border-[var(--color-border)] rounded-xl p-6 hover:border-white/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-success)] to-emerald-700 flex items-center justify-center mr-4 shadow-lg shadow-emerald-500/20">
                <Icons.shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-foreground)] font-display">
                Trustless Payments
              </h3>
            </div>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Escrow contracts ensure automatic payment release upon milestone
              completion, eliminating disputes and building trust.
            </p>
          </div>

          <div className="group bg-gradient-to-br from-[var(--color-surface)] to-black/20 backdrop-blur-sm border border-[var(--color-border)] rounded-xl p-6 hover:border-white/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-cyan-700 flex items-center justify-center mr-4 shadow-lg shadow-blue-500/20">
                <Icons.globe className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-foreground)] font-display">
                Global Access
              </h3>
            </div>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Borderless platform accessible to anyone with a crypto wallet, no
              traditional banking required for global collaboration.
            </p>
          </div>

          <div className="group bg-gradient-to-br from-[var(--color-surface)] to-black/20 backdrop-blur-sm border border-[var(--color-border)] rounded-xl p-6 hover:border-white/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mr-4 shadow-lg shadow-pink-500/20">
                <Icons.users className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-foreground)] font-display">
                Community Governed
              </h3>
            </div>
            <p className="text-[var(--color-muted)] leading-relaxed">
              DAO governance allows the community to vote on platform changes
              and dispute resolutions, ensuring transparency.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const Icons = {
  freelancer: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
        fill="white"
      />
      <path
        d="M12 14C8.13401 14 5 17.134 5 21C5 21.5523 5.44772 22 6 22H18C18.5523 22 19 21.5523 19 21C19 17.134 15.866 14 12 14Z"
        fill="white"
      />
      <path
        d="M20 8L18 10L20 12"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  client: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 6L9 17L4 12"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  smartContract: () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 2V8H20"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 13H8"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 17H8"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 9H9H8"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  blockchain: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L2 7L12 12L22 7L12 2Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 17L12 22L22 17"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12L12 17L22 12"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  token: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
      <path d="M12 6V18" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 10H16" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 14H16" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  wallet: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  ),
  ipfs: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  dao: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 21V19C17 17.9 16.1 17 15 17H9C7.9 17 7 17.9 7 19V21"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 1L3 5V11C3 16 12 21 12 21C12 21 21 16 21 11V5L12 1Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  shield: (props?: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 1L3 5V11C3 16 12 21 12 21C12 21 21 16 21 11V5L12 1Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  globe: (props?: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M2 12H22" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 2C14.5 4.5 16 8.5 16 12C16 15.5 14.5 19.5 12 22C9.5 19.5 8 15.5 8 12C8 8.5 9.5 4.5 12 2Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  ),
  users: (props?: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17 21V19C17 17.9 16.1 17 15 17H9C7.9 17 7 17.9 7 19V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M22 21V19C22 17.9 21.1 17 20 17H19.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 3.13C16.8 3.35 17.3 4.24 17.3 5.05C17.3 5.86 16.8 6.75 16 6.97"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export default AnimatedBeamDemo;
