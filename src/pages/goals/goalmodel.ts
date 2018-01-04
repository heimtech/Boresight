class GoalModel {

  /**
   * The name of the goal
   */
  goalName: string;

  /**
   * The value of the goal which should reached to get 100%
   */
  goalTargetValue: string;

  /**
   * The unit of the goalTargetValue
   */
  goalTargetUnit: string;

  /**
   * The time value in which quantity the goal value should be reached, for e.g 50 mins, 2 weeks.
   */
  goalDependencyTimeValue: string;

  /**
   * The quantity unit for the goal dependency value like, minutes, weeks, days, hours
   */
  goalDependencyTimeUnit: string;
}


