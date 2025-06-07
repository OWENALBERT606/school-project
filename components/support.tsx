"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Shield,
  HelpCircle,
  Users,
  Leaf,
  AlertTriangle,
  BookOpen,
} from "lucide-react"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="h-8 w-8 text-green-600" />
            <h1 className="text-4xl font-bold text-gray-900">ADE Support</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get help with our agricultural digital ecosystem platform. We're here to support your farming journey.
          </p>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-green-200 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <HelpCircle className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-green-800">Technical Support</CardTitle>
              <CardDescription>Platform usage, features, and technical issues</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-2">
              <div className="flex items-center justify-center gap-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>support@ade.com</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                24/7 Available
              </Badge>
            </CardContent>
          </Card>

          <Card className="border-red-200 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-2">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <CardTitle className="text-red-800">Report Violations</CardTitle>
              <CardDescription>Report platform abuse, policy violations, or misconduct</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-2">
              <div className="flex items-center justify-center gap-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>violations@ade.com</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm">
                <AlertTriangle className="h-4 w-4" />
                <span>Priority Response</span>
              </div>
              <Badge variant="destructive" className="bg-red-100 text-red-800">
                Urgent Issues
              </Badge>
            </CardContent>
          </Card>

          <Card className="border-blue-200 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-blue-800">General Inquiries</CardTitle>
              <CardDescription>Partnership, sales, and general questions</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-2">
              <div className="flex items-center justify-center gap-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>info@ade.com</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>+ (256) 7889810909</span>
              </div>
              <Badge variant="outline" className="border-blue-200 text-blue-800">
                Business Hours
              </Badge>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-green-600" />
                Contact Form
              </CardTitle>
              <CardDescription>Send us a message and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Support Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technical">Technical Support</SelectItem>
                    <SelectItem value="violation">Report Violation</SelectItem>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                    <SelectItem value="billing">Billing & Payments</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Brief description of your issue" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Please provide detailed information about your inquiry or issue..."
                  className="min-h-[120px]"
                />
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700">Send Message</Button>
            </CardContent>
          </Card>

          {/* Contact Information & FAQ */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-green-600" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Headquarters</p>
                      <p className="text-sm text-gray-600">
                        123 PortBell Road
                        <br />
                        Nakawa-Portbell road
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Support Hours</p>
                      <p className="text-sm text-gray-600">
                        Technical Support: 24/7
                        <br />
                        General Inquiries: Mon-Fri 8AM-6PM PST
                        <br />
                        Violations: 24/7 Priority Response
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-green-600" />
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-sm">How do I reset my password?</p>
                    <p className="text-sm text-gray-600">Use the "Forgot Password" link on the login page.</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="font-medium text-sm">What constitutes a platform violation?</p>
                    <p className="text-sm text-gray-600">
                      Spam, harassment, false information, or misuse of agricultural data.
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <p className="font-medium text-sm">How quickly do you respond to support tickets?</p>
                    <p className="text-sm text-gray-600">
                      Technical issues: 2-4 hours, General inquiries: 24 hours, Violations: Immediate
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <p className="font-medium text-sm">Do you offer phone support?</p>
                    <p className="text-sm text-gray-600">
                      Yes, for technical issues and urgent violations. General inquiries via email preferred.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-800">
                  <AlertTriangle className="h-5 w-5" />
                  Emergency Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-orange-700 mb-3">
                  For critical system outages or security incidents affecting agricultural operations:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-orange-800">
                    <Phone className="h-4 w-4" />
                    <span>Emergency Hotline:  (220) 911-345</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-orange-800">
                    <Mail className="h-4 w-4" />
                    <span>emergency@ade.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
