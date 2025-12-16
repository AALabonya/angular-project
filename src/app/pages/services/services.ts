import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class ServicesComponent{services = [
    {
      id: 1,
      title: "Workspace Consultation",
      description: "Our experts analyze your room acoustics, lighting, and layout to design the perfect productivity setup tailored to your needs.",
      icon: "layout",
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: 2,
      title: "Custom PC Building",
      description: "Don't settle for pre-built. We select compatible parts and build high-performance workstations optimized for coding and design.",
      icon: "cpu",
      color: "bg-purple-100 text-purple-600"
    },
    {
      id: 3,
      title: "Corporate Procurement",
      description: "Equipping a whole team? We offer bulk pricing, asset tagging, and direct shipping to your remote employees worldwide.",
      icon: "briefcase",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      id: 4,
      title: "24/7 Priority Support",
      description: "Get a dedicated line to our tech experts. We resolve hardware and software issues remotely so you never lose focus.",
      icon: "headphones",
      color: "bg-pink-100 text-pink-600"
    },
    {
      id: 5,
      title: "Ergonomic Calibration",
      description: "We help you adjust your chair, monitor, and desk height to prevent strain and ensure long-term health.",
      icon: "activity",
      color: "bg-green-100 text-green-600"
    },
    {
      id: 6,
      title: "Equipment Trade-In",
      description: "Upgrade your gear for less. We evaluate your old electronics and furniture and offer competitive credit towards new purchases.",
      icon: "refresh",
      color: "bg-orange-100 text-orange-600"
    }
  ];
}
