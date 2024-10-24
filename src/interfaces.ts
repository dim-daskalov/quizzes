export interface Quiz {
  id: number
  imageSrc: string
  name: string
  questions: Question[]
}

export interface Question {
  id: number
  text: string
  options: Option[]
}

interface Option {
  id: number
  label: string
  text: string
  isCorrect: boolean
}
