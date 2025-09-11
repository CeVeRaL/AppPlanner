import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MiniCalendar() {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  const today = now.getDate();

  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const renderCalendarDays = () => {
    const days = [];
    
    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<View key={`empty-${i}`} style={styles.emptyDay} />);
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = day === today;
      days.push(
        <View key={day} style={[styles.dayCell, isToday && styles.todayCell]}>
          <Text style={[styles.dayText, isToday && styles.todayText]}>
            {day}
          </Text>
        </View>
      );
    }
    
    return days;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.monthYear}>
        {monthNames[currentMonth]} {currentYear}
      </Text>
      <View style={styles.weekDays}>
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <Text key={index} style={styles.weekDayText}>{day}</Text>
        ))}
      </View>
      <View style={styles.calendar}>
        {renderCalendarDays()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 211, 61, 0.3)',
  },
  monthYear: {
    color: '#ffd33d',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  weekDays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  weekDayText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
    width: 20,
    textAlign: 'center',
  },
  calendar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayCell: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
  },
  emptyDay: {
    width: 20,
    height: 20,
    margin: 1,
  },
  dayText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '500',
  },
  todayCell: {
    backgroundColor: '#ffd33d',
    borderRadius: 10,
  },
  todayText: {
    color: '#25292e',
    fontWeight: 'bold',
  },
});