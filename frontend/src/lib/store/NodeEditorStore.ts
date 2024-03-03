import { nanoid } from 'nanoid'
import { NodeChange, applyEdgeChanges, applyNodeChanges } from 'reactflow'
import { create } from 'zustand'

export const useStore = create((set, get) => ({
  nodes: [{ type: 'data', id: 'a', data: { source: 'none' }, position: { x: 400, y: 400 } }],
  edges: [],
  onNodesChange(changes: NodeChange[]) {
    set({
      // @ts-expect-error TODO: fix this
      nodes: applyNodeChanges(changes, get().nodes)
    })
  },
  onEdgesChange(changes: NodeChange[]) {
    set({
      // @ts-expect-error TODO: fix this
      edges: applyEdgeChanges(changes, get().edges)
    })
  },
  // @ts-expect-error TODO: fix this
  addEdge(data) {
    const id = nanoid(6)
    const edge = { id, ...data }

    // @ts-expect-error TODO: fix this
    set({ edges: [edge, ...get().edges] })
  },
  // @ts-expect-error TODO: fix this
  updateNode(id, data) {
    set({
      // @ts-expect-error TODO: fix this
      nodes: get().nodes.map((node) => (node.id === id ? { ...node, data: { ...node.data, ...data } } : node))
    })
  }
}))
