import React, { useState } from 'react';
import { personalInfo } from '@/data';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { renderIcon } from '@/utils/IconWrapper';
import { useAnalytics } from '@/hooks/useAnalytics';
import TrackedLink from '@/components/ui/TrackedLink';
import SectionHeader from '@/components/ui/SectionHeader';
import Section from '@/components/ui/Section';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStartTime, setFormStartTime] = useState<number>(0);

  // Analytics hooks
  const { trackContactForm } = useAnalytics();

  // Track form start on first input
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Track form start on first input
    if (formStartTime === 0 && value.length === 1) {
      const startTime = Date.now();
      setFormStartTime(startTime);
      trackContactForm('start', { formType: 'contact' });
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Calculate completion time
    const completionTime = formStartTime > 0 ? Date.now() - formStartTime : 0;

    // Track form submission
    trackContactForm('submit', {
      formType: 'contact',
      completionTime,
    });

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Track successful submission
      trackContactForm('success', {
        formType: 'contact',
        completionTime,
      });

      // Form submitted - handle form data here
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormStartTime(0);
    } catch (error) {
      // Track form error
      trackContactForm('error', {
        formType: 'contact',
        completionTime,
        errorField: 'submission',
      });

      // Log error for debugging
      // eslint-disable-next-line no-console
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    {
      icon: renderIcon(HiMail),
      label: 'email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: renderIcon(HiPhone),
      label: 'phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: renderIcon(HiLocationMarker),
      label: 'location',
      value: personalInfo.location,
      href: null,
    },
  ];

  return (
    <Section id='contact' className={`${styles.contact} darkBg`}>
      <SectionHeader
        title='contact'
        subtitle="let's build something amazing together"
      />

      <div className={styles.contactContent}>
        <div
          className={styles.contactInfo}
          data-aos='fade-right'
          data-aos-delay='200'
        >
          <div className={styles.contactText}>
            <p>
              I'm always interested in new opportunities and collaborations.
              Whether you have a project in mind, want to discuss technology, or
              just want to say hello, feel free to reach out.
            </p>
          </div>

          <div className={styles.contactDetails}>
            {contactDetails.map((detail, index) => (
              <div
                key={index}
                className={styles.contactDetail}
                data-aos='fade-up'
                data-aos-delay={300 + index * 100}
              >
                <div className={styles.contactDetailIcon}>{detail.icon}</div>
                <div className={styles.contactDetailContent}>
                  <div className={styles.contactDetailLabel}>
                    {detail.label}
                  </div>
                  <div className={styles.contactDetailValue}>
                    {detail.href ? (
                      <TrackedLink
                        href={detail.href}
                        linkName={detail.label}
                        section='contact_section'
                        category='contact_details'
                        target='_self'
                      >
                        {detail.value}
                      </TrackedLink>
                    ) : (
                      detail.value
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={styles.contactForm}
          data-aos='fade-left'
          data-aos-delay='400'
        >
          <h3 className={styles.contactFormTitle}>send message</h3>
          <form onSubmit={handleSubmit}>
            <div className='form-group' data-aos='fade-up' data-aos-delay='500'>
              <label htmlFor='name'>name</label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                placeholder='your name'
                required
              />
            </div>

            <div className='form-group' data-aos='fade-up' data-aos-delay='600'>
              <label htmlFor='email'>email</label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                placeholder='your.email@example.com'
                required
              />
            </div>

            <div className='form-group' data-aos='fade-up' data-aos-delay='700'>
              <label htmlFor='subject'>subject</label>
              <input
                type='text'
                id='subject'
                name='subject'
                value={formData.subject}
                onChange={handleInputChange}
                placeholder='project inquiry'
                required
              />
            </div>

            <div className='form-group' data-aos='fade-up' data-aos-delay='800'>
              <label htmlFor='message'>message</label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleInputChange}
                placeholder='tell me about your project...'
                required
              />
            </div>

            <button
              type='submit'
              className={styles.contactFormSubmit}
              disabled={isSubmitting}
              data-aos='fade-up'
              data-aos-delay='900'
            >
              {isSubmitting ? 'sending...' : 'send message'}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
