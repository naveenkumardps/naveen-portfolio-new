
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import { AlertTriangle, Clock, Users, FileText, DollarSign, XCircle } from 'lucide-react';

interface TaskUserData {
  activity_id: string;
  billable_status: string;
  description: string | null;
  employee_id: string;
  employee_name: string;
  end_time: string | null;
  hours_worked: number;
  item_id: string;
  item_name: string;
  start_time: string | null;
  txn_date: string;
  user_email: string | null;
  user_name: string | null;
}

interface UserSummary {
  billable_hours: number;
  employee_id: string;
  employee_name: string;
  non_billable_hours: number;
  task_count: number;
  total_hours: number;
  user_email: string | null;
  user_name: string | null;
}

interface GrandTotals {
  billable_hours: number;
  non_billable_hours: number;
  total_hours: number;
  total_tasks: number;
  total_users: number;
}

interface TaskSummaryData {
  grand_totals: GrandTotals;
  success: boolean;
  task_user_data: TaskUserData[];
  user_summary: UserSummary[];
}

const TaskSummary: React.FC = () => {
  const [data, setData] = useState<TaskSummaryData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [usingMockData, setUsingMockData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/getTaskUserSummary');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        response.headers['Content-Type'] = 'application/json'
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.log('API not available, using mock data');
        setUsingMockData(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  const formatTime = (timeString: string | null) => {
    if (!timeString) return 'N/A';
    return new Date(timeString).toLocaleTimeString();
  };

  const getBillableStatusVariant = (status: string) => {
    switch (status) {
      case 'Billable':
        return 'default';
      case 'HasBeenBilled':
        return 'secondary';
      case 'NotBillable':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6 space-y-6">
        <div className="space-y-2">
          <Skeleton className="h-8 w-96 mx-auto" />
          <Skeleton className="h-4 w-64 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {[...Array(5)].map((_, i) => (
            <Card key={i}>
              <CardHeader className="pb-2">
                <Skeleton className="h-4 w-20" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-16" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="container mx-auto p-6">
        <Card className="border-destructive">
          <CardContent className="flex items-center justify-center p-8">
            <div className="text-center space-y-2">
              <XCircle className="h-12 w-12 text-destructive mx-auto" />
              <h3 className="text-lg font-semibold text-destructive">No Data Available</h3>
              <p className="text-muted-foreground">Unable to load task summary data</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Task & User Summary Dashboard</h1>
        <p className="text-muted-foreground">Comprehensive overview of task activities and user performance</p>
      </div>
      
      {/* Mock Data Notice */}
      {usingMockData && (
        <Card className="border-yellow-200 bg-yellow-50">
          <CardContent className="flex items-center gap-2 p-4">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            <p className="text-yellow-800 font-medium">Using mock data - API server not available</p>
          </CardContent>
        </Card>
      )}
      
      {/* Grand Totals Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Grand Totals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Total Hours</CardTitle>
              <Clock className="h-4 w-4 opacity-80" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{data.grand_totals.total_hours}</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Billable Hours</CardTitle>
              <DollarSign className="h-4 w-4 opacity-80" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{data.grand_totals.billable_hours}</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-orange-500 to-red-500 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Non-Billable Hours</CardTitle>
              <XCircle className="h-4 w-4 opacity-80" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{data.grand_totals.non_billable_hours}</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-indigo-500 to-blue-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Total Tasks</CardTitle>
              <FileText className="h-4 w-4 opacity-80" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{data.grand_totals.total_tasks}</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-500 to-pink-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Total Users</CardTitle>
              <Users className="h-4 w-4 opacity-80" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{data.grand_totals.total_users}</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* User Summary Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">User Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.user_summary.map((user) => (
            <Card key={user.employee_id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg">{user.employee_name}</CardTitle>
                <CardDescription>{user.user_email || 'No email provided'}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Total Hours</p>
                    <p className="text-2xl font-bold">{user.total_hours}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Tasks</p>
                    <p className="text-2xl font-bold">{user.task_count}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Billable</p>
                    <p className="text-xl font-semibold text-green-600">{user.billable_hours}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Non-Billable</p>
                    <p className="text-xl font-semibold text-orange-600">{user.non_billable_hours}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Task Details Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Task Details</h2>
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Item</TableHead>
                    <TableHead className="text-right">Hours</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Start Time</TableHead>
                    <TableHead>End Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.task_user_data.map((task) => (
                    <TableRow key={task.activity_id} className="hover:bg-muted/50">
                      <TableCell className="font-medium">{task.employee_name}</TableCell>
                      <TableCell className="max-w-xs truncate">
                        {task.description || 'No description'}
                      </TableCell>
                      <TableCell>{task.item_name}</TableCell>
                      <TableCell className="text-right font-semibold">{task.hours_worked}</TableCell>
                      <TableCell>
                        <Badge variant={getBillableStatusVariant(task.billable_status)}>
                          {task.billable_status}
                        </Badge>
                      </TableCell>
                      <TableCell>{formatDate(task.txn_date)}</TableCell>
                      <TableCell>{formatTime(task.start_time)}</TableCell>
                      <TableCell>{formatTime(task.end_time)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TaskSummary;
