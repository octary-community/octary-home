"use client";

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import Image from "next/image";

export const ImageBlock = ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => (
    <div className="my-6 space-y-3">
        <div className="relative rounded-xl overflow-hidden border border-slate-700/50 bg-slate-950/50 p-1">
            <Image
                src={src}
                alt={alt}
                className="w-full h-auto rounded-lg object-cover opacity-90 hover:opacity-100 transition-opacity"
                width={800}
                height={400}
            />
        </div>
        {caption && (
            <p className="text-center text-xs text-slate-500 italic">{caption}</p>
        )}
    </div>
);

export const CodeBlock = ({ code, language = 'html' }: { code: string; language?: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative my-4 rounded-lg overflow-hidden border border-slate-700/50 bg-slate-950/50">
            <div className="flex items-center justify-between px-4 py-2 bg-slate-900/50 border-b border-slate-700/50">
                <span className="text-xs text-slate-400 font-mono">{language}</span>
                <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-2 py-1 rounded text-xs text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50 transition-colors"
                >
                    {copied ? (
                        <>
                            <Check className="w-3.5 h-3.5" />
                            Copied!
                        </>
                    ) : (
                        <>
                            <Copy className="w-3.5 h-3.5" />
                            Copy
                        </>
                    )}
                </button>
            </div>
            <div className="p-4 overflow-x-auto">
                <pre className="text-sm text-slate-300 font-mono leading-relaxed">
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    );
};
