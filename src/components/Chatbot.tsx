"use client";
import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, Send, X, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 1,
    text: "Hello! I'm your PickAndBuy assistant. How can I help you today?",
    isUser: false,
    timestamp: new Date(),
  },
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sample responses
  const sampleResponses = [
    "I'd be happy to help you with that! Could you provide more details?",
    "You can find that in your account settings under 'Personal Information'.",
    "Our standard shipping takes 3-5 business days. Express shipping is 1-2 business days.",
    "Yes, we offer a 30-day return policy on most items. Some restrictions may apply.",
    "For bulk orders, please contact our customer service team at support@pickandbuy.com.",
    "You can track your order by going to 'My Orders' in your account dashboard.",
    "We accept Visa, Mastercard, PayPal, Apple Pay, and Google Pay.",
    "Let me check that for you! The item is currently in stock and available for shipping.",
  ];

  // Scroll to bottom of chat when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response after a delay
    setTimeout(() => {
      const randomResponse =
        sampleResponses[Math.floor(Math.random() * sampleResponses.length)];

      const botMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-30">
      {/* Chat toggle button */}
      <button
        onClick={toggleChat}
        className="ml-auto w-14 h-14 rounded-full bg-brand-600 text-white shadow-lg flex items-center justify-center hover:bg-brand-700 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-opacity-50"
        aria-label="Toggle chat"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat window */}
      <div
        className={`absolute bottom-20 right-0 w-80 sm:w-96 bg-white dark:bg-black rounded-xl shadow-2xl transition-all duration-300 transform ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0 pointer-events-none"
        } overflow-hidden border border-gray-100 dark:border-gray-800`}
      >
        {/* Chat header */}
        <div className="bg-brand-600 text-white p-4 flex items-center justify-between">
          <div className="flex items-center">
            <Bot size={20} className="mr-2" />
            <div>
              <h3 className="font-medium">PickAndBuy Assistant</h3>
              <p className="text-xs text-white/80">
                We typically reply within minutes
              </p>
            </div>
          </div>
          <button
            onClick={toggleChat}
            className="text-white/90 hover:text-white focus:outline-none"
            aria-label="Close chat"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages container */}
        <div className="flex flex-col h-[320px]">
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-black">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2 ${
                      message.isUser
                        ? "bg-brand-600 text-white rounded-tr-none"
                        : "bg-white dark:bg-black/70 shadow-sm rounded-tl-none"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <div
                      className={`text-xs mt-1 ${
                        message.isUser
                          ? "text-white/70"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {formatTime(message.timestamp)}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl px-4 py-2 bg-white dark:bg-black/70 shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-black/50 animate-bounce"></div>
                      <div
                        className="w-2 h-2 rounded-full bg-gray-400 dark:bg-black/50 animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-gray-400 dark:bg-black/50 animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Chat input */}
          <form
            onSubmit={handleSubmit}
            className="p-4 border-t border-gray-100 dark:border-gray-800 flex"
          >
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-l-full focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-black"
            />
            <Button
              type="submit"
              className="rounded-r-full px-4"
              disabled={!inputValue.trim()}
            >
              <Send size={18} />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
