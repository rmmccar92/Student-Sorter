export type Student = {
  id: number;
  name: string;
  created_at: string;
  sortable_name: string;
  short_name: string;
  login_id: string;
  avatar_url: string;
  enrollments: {
    id: number;
    user_id: number;
    course_id: number;
    type: string;
    created_at: string;
    updated_at: string;
    associated_user_id: null;
    start_at: null;
    end_at: null;
    course_section_id: number;
    root_account_id: number;
    limit_privileges_to_course_section: boolean;
    enrollment_state: string;
    role: string;
    role_id: number;
    grades: {
      html_url: string;
      current_grade: null;
      current_score: null;
      final_grade: string;
      final_score: number;
      unposted_current_score: null;
      unposted_current_grade: null;
      unposted_final_score: number;
      unposted_final_grade: string;
    };
    html_url: string;
    can_be_removed: boolean;
  }[];
  email: string;
  custom_links: {
    url: string;
    icon_class: string;
    text: string;
  }[];
  analytics_url: string;
};

export type Group = {
  id: number;
  name: string;
  members: Student[];
  color: string;
};
// Test 2
