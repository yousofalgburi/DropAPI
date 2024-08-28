'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { PlusCircle, Save, Wand2 } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'

export default function Page({ id }: { id: string }) {
	const [apiName, setApiName] = useState('My API')
	const [endpoints, setEndpoints] = useState([
		{
			id: 1,
			method: 'GET',
			path: '/users',
			caching: {
				enabled: false,
				duration: 300,
			},
			rateLimiting: {
				enabled: false,
				limit: 60,
			},
		},
		{
			id: 2,
			method: 'POST',
			path: '/users',
			caching: {
				enabled: false,
				duration: 0,
			},
			rateLimiting: {
				enabled: false,
				limit: 30,
			},
		},
	])

	const addEndpoint = () => {
		const newEndpoint = {
			id: endpoints.length + 1,
			method: 'GET',
			path: '/new-endpoint',
			caching: {
				enabled: false,
				duration: 300,
			},
			rateLimiting: {
				enabled: false,
				limit: 60,
			},
		}
		setEndpoints([...endpoints, newEndpoint])
	}

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const updateEndpoint = (id: number, field: string, value: any) => {
		const updatedEndpoints = endpoints.map((ep) => (ep.id === id ? { ...ep, [field]: value } : ep))
		setEndpoints(updatedEndpoints)
	}

	return (
		<div className='container mx-auto p-4 py-16'>
			<header className='flex justify-between items-center mb-6'>
				<h1 className='text-2xl font-bold'>{apiName}</h1>
				<Button>
					<Save className='mr-2 h-4 w-4' /> Save
				</Button>
			</header>

			<Tabs defaultValue='endpoints'>
				<TabsList className='grid w-full grid-cols-2 md:grid-cols-4'>
					<TabsTrigger value='endpoints'>Endpoints</TabsTrigger>
					<TabsTrigger value='settings'>Settings</TabsTrigger>
					<TabsTrigger value='authentication'>Authentication</TabsTrigger>
					<TabsTrigger value='documentation'>Documentation</TabsTrigger>
				</TabsList>

				<TabsContent value='endpoints' className='mt-6'>
					<Card>
						<CardHeader>
							<CardTitle>AI-Assisted API Generation</CardTitle>
							<CardDescription>Define your API endpoints using natural language or manage them manually.</CardDescription>
						</CardHeader>
						<CardContent>
							<div className='space-y-6'>
								<div>
									<Label htmlFor='api-requirements'>API Requirements</Label>
									<Textarea id='api-requirements' placeholder='Describe your API requirements in plain text...' className='h-32' />
									<Button className='mt-2'>
										<Wand2 className='mr-2 h-4 w-4' /> Generate Endpoints
									</Button>
								</div>
								<Separator />
								<div>
									<h3 className='text-lg font-semibold mb-2'>Endpoints</h3>
									<Accordion type='single' collapsible className='w-full'>
										{endpoints.map((endpoint) => (
											<AccordionItem key={endpoint.id} value={`endpoint-${endpoint.id}`}>
												<AccordionTrigger>
													<div className='flex items-center space-x-2'>
														<Badge variant={endpoint.method === 'GET' ? 'default' : 'secondary'}>{endpoint.method}</Badge>
														<span className='font-mono'>{endpoint.path}</span>
													</div>
												</AccordionTrigger>
												<AccordionContent>
													<div className='space-y-4'>
														<div className='grid grid-cols-2 gap-4'>
															<div>
																<Label htmlFor={`path-${endpoint.id}`}>Path</Label>
																<Input
																	id={`path-${endpoint.id}`}
																	value={endpoint.path}
																	onChange={(e) => updateEndpoint(endpoint.id, 'path', e.target.value)}
																/>
															</div>
															<div>
																<Label htmlFor={`method-${endpoint.id}`}>Method</Label>
																<Select
																	defaultValue={endpoint.method}
																	onValueChange={(value) => updateEndpoint(endpoint.id, 'method', value)}
																>
																	<SelectTrigger id={`method-${endpoint.id}`}>
																		<SelectValue placeholder='Select method' />
																	</SelectTrigger>
																	<SelectContent>
																		<SelectItem value='GET'>GET</SelectItem>
																		<SelectItem value='POST'>POST</SelectItem>
																		<SelectItem value='PUT'>PUT</SelectItem>
																		<SelectItem value='DELETE'>DELETE</SelectItem>
																	</SelectContent>
																</Select>
															</div>
														</div>
														<div>
															<Label htmlFor={`request-body-${endpoint.id}`}>Request Body Schema</Label>
															<Textarea id={`request-body-${endpoint.id}`} placeholder='Enter JSON schema' />
														</div>
														<div>
															<Label htmlFor={`response-body-${endpoint.id}`}>Response Body Schema</Label>
															<Textarea id={`response-body-${endpoint.id}`} placeholder='Enter JSON schema' />
														</div>
														<div>
															<Label htmlFor={`query-params-${endpoint.id}`}>Query Parameters</Label>
															<Textarea id={`query-params-${endpoint.id}`} placeholder='Enter query parameters' />
														</div>
														<div>
															<Label htmlFor={`headers-${endpoint.id}`}>Headers</Label>
															<Textarea id={`headers-${endpoint.id}`} placeholder='Enter headers' />
														</div>
														<div className='flex items-center space-x-2'>
															<Switch
																id={`caching-enabled-${endpoint.id}`}
																checked={endpoint.caching.enabled}
																onCheckedChange={(checked) =>
																	updateEndpoint(endpoint.id, 'caching', { ...endpoint.caching, enabled: checked })
																}
															/>
															<Label htmlFor={`caching-enabled-${endpoint.id}`}>Enable Caching</Label>
														</div>
														{endpoint.caching.enabled && (
															<div>
																<Label htmlFor={`cache-duration-${endpoint.id}`}>Cache Duration (seconds)</Label>
																<Input
																	id={`cache-duration-${endpoint.id}`}
																	type='number'
																	value={endpoint.caching.duration}
																	onChange={(e) =>
																		updateEndpoint(endpoint.id, 'caching', {
																			...endpoint.caching,
																			duration: Number.parseInt(e.target.value),
																		})
																	}
																/>
															</div>
														)}
														<div className='flex items-center space-x-2'>
															<Switch
																id={`rate-limiting-enabled-${endpoint.id}`}
																checked={endpoint.rateLimiting.enabled}
																onCheckedChange={(checked) =>
																	updateEndpoint(endpoint.id, 'rateLimiting', {
																		...endpoint.rateLimiting,
																		enabled: checked,
																	})
																}
															/>
															<Label htmlFor={`rate-limiting-enabled-${endpoint.id}`}>Enable Rate Limiting</Label>
														</div>
														{endpoint.rateLimiting.enabled && (
															<div>
																<Label htmlFor={`rate-limit-${endpoint.id}`}>Requests per minute</Label>
																<Input
																	id={`rate-limit-${endpoint.id}`}
																	type='number'
																	value={endpoint.rateLimiting.limit}
																	onChange={(e) =>
																		updateEndpoint(endpoint.id, 'rateLimiting', {
																			...endpoint.rateLimiting,
																			limit: Number.parseInt(e.target.value),
																		})
																	}
																/>
															</div>
														)}
													</div>
												</AccordionContent>
											</AccordionItem>
										))}
									</Accordion>
									<Button onClick={addEndpoint} className='mt-4'>
										<PlusCircle className='mr-2 h-4 w-4' /> Add Endpoint
									</Button>
								</div>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value='settings' className='mt-6'>
					<Card>
						<CardHeader>
							<CardTitle>API Settings</CardTitle>
							<CardDescription>Configure general settings for your API.</CardDescription>
						</CardHeader>
						<CardContent>
							<div className='space-y-4'>
								<div>
									<Label htmlFor='api-name'>API Name</Label>
									<Input id='api-name' value={apiName} onChange={(e) => setApiName(e.target.value)} />
								</div>
								<div>
									<Label htmlFor='api-version'>API Version</Label>
									<Input id='api-version' placeholder='e.g., v1.0.0' />
								</div>
								<div>
									<Label htmlFor='base-url'>Base URL</Label>
									<Input id='base-url' placeholder='https://api.example.com' />
								</div>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value='authentication' className='mt-6'>
					<Card>
						<CardHeader>
							<CardTitle>Authentication</CardTitle>
							<CardDescription>Set up authentication for your API.</CardDescription>
						</CardHeader>
						<CardContent>
							<div className='space-y-4'>
								<div>
									<Label htmlFor='auth-type'>Authentication Type</Label>
									<Select>
										<SelectTrigger id='auth-type'>
											<SelectValue placeholder='Select authentication type' />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value='api-key'>API Key</SelectItem>
											<SelectItem value='oauth2'>OAuth 2.0</SelectItem>
											<SelectItem value='jwt'>JWT</SelectItem>
										</SelectContent>
									</Select>
								</div>
								{/* Add more authentication settings based on the selected type */}
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value='documentation' className='mt-6'>
					<Card>
						<CardHeader>
							<CardTitle>API Documentation</CardTitle>
							<CardDescription>Manage and generate documentation for your API.</CardDescription>
						</CardHeader>
						<CardContent>
							<div className='space-y-4'>
								<div>
									<Label htmlFor='doc-format'>Documentation Format</Label>
									<Select>
										<SelectTrigger id='doc-format'>
											<SelectValue placeholder='Select documentation format' />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value='openapi'>OpenAPI (Swagger)</SelectItem>
											<SelectItem value='raml'>RAML</SelectItem>
											<SelectItem value='api-blueprint'>API Blueprint</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<Button>Generate Documentation</Button>
							</div>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	)
}
