"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { eventData } from '@/lib/organizer/barchartData';

export default function OrganizerDashboard() {
  return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-[#5F0F40]">TOTAL EVENTS</h1>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Metrics Section */}
          <div className="grid gap-4">
            <Card>
              <CardHeader className="space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Event Publish
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Event Unpublish
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
              </CardContent>
            </Card>
          </div>

          {/* Chart Section */}
          <Card>
            <CardHeader>
              <CardTitle>Bar Chart - Event</CardTitle>
              <p className="text-sm text-muted-foreground">
                January - June 2024
              </p>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={eventData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip />
                    <Bar
                        dataKey="value"
                        fill="#E9D5FF"
                        radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
  );
}