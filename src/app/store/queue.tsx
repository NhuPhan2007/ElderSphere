import { create } from 'zustand'

type QueueStore = {
  activeQueueId: number | string | null
  setActiveQueueId: (id: number | string) => void
}

export const useQueueStore = create<QueueStore>()((set) => ({
  activeQueueId: null,
  setActiveQueueId: (id) => set({ activeQueueId: id }),
}))

export const useQueue = () => useQueueStore((state) => state)
