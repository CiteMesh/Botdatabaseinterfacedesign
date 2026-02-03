import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CreateBotProps {
    onCancel: () => void;
}

export function CreateBot({ onCancel }: CreateBotProps) {
    return (
        <div className="container mx-auto px-4 py-8 max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
             <Card>
                <CardHeader>
                    <CardTitle>Create New Bot</CardTitle>
                    <CardDescription>Share your automation script with the OpenClaw community.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="name">Bot Name</Label>
                        <Input id="name" placeholder="e.g. Amazon Price Tracker" />
                    </div>
                    
                    <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="ecommerce">E-commerce</SelectItem>
                                <SelectItem value="social">Social Media</SelectItem>
                                <SelectItem value="finance">Finance</SelectItem>
                                <SelectItem value="utilities">Utilities</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea 
                            id="description" 
                            placeholder="Describe what your bot does..." 
                            className="min-h-[100px]"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="repo">Repository URL</Label>
                        <Input id="repo" placeholder="https://github.com/username/repo" />
                        <p className="text-xs text-muted-foreground">Link to the Git repository containing your bot code.</p>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="tags">Tags (comma separated)</Label>
                        <Input id="tags" placeholder="scraping, python, selenium" />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline" onClick={onCancel}>Cancel</Button>
                    <Button>Submit Bot</Button>
                </CardFooter>
            </Card>
        </div>
    );
}
