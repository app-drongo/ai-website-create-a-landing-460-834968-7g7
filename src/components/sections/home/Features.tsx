'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Database,
  Shield,
  Zap,
  Globe,
  BarChart3,
  Settings,
  Users,
  Clock,
  CheckCircle,
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Database,
      title: 'Seamless SAP Integration',
      description:
        'Connect your SAP ERP with any third-party system using our proven integration framework.',
      badge: 'Core',
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description:
        'SOC 2 compliant with end-to-end encryption ensuring your SAP data remains protected.',
      badge: 'Security',
    },
    {
      icon: Zap,
      title: 'Real-Time Data Sync',
      description:
        'Instant data synchronization between SAP and external systems with zero latency.',
      badge: 'Performance',
    },
    {
      icon: Globe,
      title: 'Multi-System Connectivity',
      description: 'Integrate SAP with Salesforce, Oracle, Microsoft, and 200+ other platforms.',
      badge: 'Connectivity',
    },
    {
      icon: BarChart3,
      title: 'Advanced Monitoring',
      description:
        'Complete visibility into integration performance with detailed analytics and alerts.',
      badge: 'Analytics',
    },
    {
      icon: Settings,
      title: 'Custom Workflow Engine',
      description: 'Build complex business logic and automated workflows without coding.',
      badge: 'Automation',
    },
    {
      icon: Users,
      title: 'Expert SAP Consultants',
      description:
        'Dedicated team of certified SAP professionals to guide your integration journey.',
      badge: 'Support',
    },
    {
      icon: Clock,
      title: 'Rapid Deployment',
      description: 'Go live in weeks, not months, with our pre-built SAP integration templates.',
      badge: 'Speed',
    },
    {
      icon: CheckCircle,
      title: '99.9% Uptime SLA',
      description:
        'Mission-critical reliability with guaranteed uptime and 24/7 system monitoring.',
      badge: 'Reliability',
    },
  ];

  const handleStartIntegration = () => {
    window.location.href = '/consultation';
  };

  const handleViewCaseStudies = () => {
    window.location.href = '/case-studies';
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20">
            SAP Integration Capabilities
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Complete SAP ERP
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Integration Platform
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Transform your business operations with seamless SAP integrations. Connect, automate,
            and optimize your enterprise systems with confidence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-card"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs bg-muted">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Ready to streamline your SAP integrations?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleStartIntegration}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg"
            >
              Schedule Integration Assessment
            </button>
            <button
              onClick={handleViewCaseStudies}
              className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors text-foreground"
            >
              View Success Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
