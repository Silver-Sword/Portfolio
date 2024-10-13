import React from 'react'

interface TimelineItemProps {
  children: React.ReactNode
}

interface TimelineItemHeaderProps {
  children: React.ReactNode
}

interface TimelineItemTitleProps {
  children: React.ReactNode
}

interface TimelineItemSubtitleProps {
  children: React.ReactNode
}

interface TimelineItemContentProps {
  children: React.ReactNode
}

const TimelineItem: React.FC<TimelineItemProps> & {
  Header: React.FC<TimelineItemHeaderProps>
  Title: React.FC<TimelineItemTitleProps>
  Subtitle: React.FC<TimelineItemSubtitleProps>
  Content: React.FC<TimelineItemContentProps>
} = ({ children }) => {
  return <li className="mb-10 ml-4">{children}</li>
}

TimelineItem.Header = ({ children }) => {
  return <div className="flex items-center mb-1">{children}</div>
}

TimelineItem.Title = ({ children }) => {
  return <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{children}</h3>
}

TimelineItem.Subtitle = ({ children }) => {
  return <span className="ml-2 text-sm font-normal text-gray-500 dark:text-gray-400">{children}</span>
}

TimelineItem.Content = ({ children }) => {
  return <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{children}</div>
}

export const Timeline: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700">
      {children}
    </ol>
  )
}

export { TimelineItem }