import React, { useState, useMemo } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ENotesSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Your comprehensive e-notes collection
  const allENotesData = [
    {
      id: 1,
      title: "Knowledge Management By Professor Sai Chandu",
      description: "Comprehensive guide on knowledge creation, sharing, and organizational learning frameworks.",
      subject: "Management",
      category: "Management",
      pages: 150,
      downloads: 1240,
      rating: 4.8,
      driveLink: "https://drive.google.com/file/d/1icciGwWEsICUSrwozcJXWp20d_ECWP0F/view",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&auto=format",
      tags: ["Knowledge", "Management", "Organizational Learning"],
      isNew: true
    },
    {
      id: 2,
      title: "Management Information System",
      description: "Complete MIS course covering database systems, decision support systems, and business applications.",
      subject: "MIS",
      category: "Information Systems",
      pages: 220,
      downloads: 980,
      rating: 4.9,
      driveLink: "https://drive.google.com/file/d/1MdtEUIAVsaIo3lPkscouBRJ_bNiD59Ww/view",
      thumbnail: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop&auto=format",
      tags: ["MIS", "Database", "Technology"],
      isNew: false
    },
    {
      id: 3,
      title: "MIS QUESTION BANK R20",
      description: "Complete question bank for R20 regulation MIS subject with previous year questions.",
      subject: "MIS",
      category: "Question Banks",
      pages: 85,
      downloads: 756,
      rating: 4.7,
      driveLink: "https://drive.google.com/file/d/1oKvxSugeoDR1zYa2kPlGidOEtAXiuzDd/vie",
      thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop&auto=format",
      tags: ["Question Bank", "R20", "MIS"],
      isNew: false
    },
    {
      id: 4,
      title: "Operations Management",
      description: "Fundamentals of managing production systems, quality control, supply chain logistics, and operations strategy.",
      subject: "Operations",
      category: "Operations",
      pages: 180,
      downloads: 1050,
      rating: 4.7,
      driveLink: "https://drive.google.com/file/d/15PCqVvGfcCKGGgu3iSxfhcqoiFE0Qsh7/view",
      thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop&auto=format",
      tags: ["Operations", "Supply Chain", "Production"],
      isNew: false
    },
    {
      id: 5,
      title: "GBM - All Units by Professor Sai Chandu",
      description: "Complete Global Business Management notes covering all units with practical examples.",
      subject: "GBM",
      category: "Management",
      pages: 165,
      downloads: 890,
      rating: 4.6,
      driveLink: "https://drive.google.com/file/d/189Gm-j5xCvL09itDWcssNrK-pbjZyepN/view",
      thumbnail: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop&auto=format",
      tags: ["Global Business", "Management", "International"],
      isNew: true
    },
    {
      id: 6,
      title: "Entrepreneurship Development By Prof Sai Chandu K",
      description: "Comprehensive entrepreneurship development guide with case studies and practical insights.",
      subject: "Entrepreneurship",
      category: "Entrepreneurship",
      pages: 210,
      downloads: 1120,
      rating: 4.9,
      driveLink: "https://drive.google.com/file/d/1xxIbh6ILYvQDljt9AUyT8RGuljdUWzPD/view",
      thumbnail: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop&auto=format",
      tags: ["Entrepreneurship", "Startups", "Innovation"],
      isNew: true
    },
    {
      id: 7,
      title: "Case Studies + Important Questions + Assignment",
      description: "Collection of case studies, important questions, and assignments for management subjects.",
      subject: "Management",
      category: "Question Banks",
      pages: 95,
      downloads: 654,
      rating: 4.5,
      driveLink: "https://drive.google.com/file/d/your-link-7/view",
      thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&auto=format",
      tags: ["Case Studies", "Questions", "Assignments"],
      isNew: false
    },
    {
      id: 8,
      title: "Industry Analysis Report",
      description: "Detailed industry analysis methodologies and practical report writing guidelines.",
      subject: "Research",
      category: "Research",
      pages: 120,
      downloads: 432,
      rating: 4.4,
      driveLink: "https://drive.google.com/file/d/1j90uUZmmbGaWuqxaajnSwp05B9JHCPM1/view",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format",
      tags: ["Industry Analysis", "Research", "Reports"],
      isNew: false
    },
    {
      id: 9,
      title: "Q&A Question Bank ED R20",
      description: "Entrepreneurship Development question bank for R20 regulation with model answers.",
      subject: "Entrepreneurship",
      category: "Question Banks",
      pages: 78,
      downloads: 567,
      rating: 4.6,
      driveLink: "https://drive.google.com/file/d/1Q2kDbSLzzs7Md47cIH4cBI2A1eMPR7D4/view",
      thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop&auto=format",
      tags: ["Question Bank", "Entrepreneurship", "R20"],
      isNew: false
    },
    {
      id: 10,
      title: "Human Resource Management",
      description: "Complete HRM notes covering recruitment, training, compensation, and labor relations.",
      subject: "HRM",
      category: "Human Resources",
      pages: 165,
      downloads: 890,
      rating: 4.6,
      driveLink: "https://drive.google.com/file/d/your-link-10/view",
      thumbnail: "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=300&fit=crop&auto=format",
      tags: ["HRM", "Recruitment", "Training"],
      isNew: false
    },
    {
      id: 11,
      title: "HRP Unit-III",
      description: "Human Resource Planning Unit 3 detailed notes with practical applications.",
      subject: "HRM",
      category: "Human Resources",
      pages: 45,
      downloads: 234,
      rating: 4.3,
      driveLink: "https://drive.google.com/file/d/your-link-11/view",
      thumbnail: "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=300&fit=crop&auto=format",
      tags: ["HRP", "Planning", "Unit 3"],
      isNew: false
    },
    {
      id: 12,
      title: "Operations Research",
      description: "Mathematical optimization techniques and decision-making tools for business operations.",
      subject: "Operations Research",
      category: "Operations",
      pages: 145,
      downloads: 567,
      rating: 4.5,
      driveLink: "https://drive.google.com/file/d/your-link-12/view",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format",
      tags: ["Operations Research", "Optimization", "Mathematics"],
      isNew: false
    },
    {
      id: 13,
      title: "Business Simulation Lab",
      description: "Interactive lab activities for understanding business operations using simulated tools.",
      subject: "Practical",
      category: "Practical",
      pages: 90,
      downloads: 540,
      rating: 4.3,
      driveLink: "https://drive.google.com/file/d/your-link-13/view",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format",
      tags: ["Simulation", "Lab", "Practice"],
      isNew: false
    },
    {
      id: 14,
      title: "Intellectual Property Rights",
      description: "Comprehensive guide to IPR including patents, copyrights, and trademarks.",
      subject: "Law",
      category: "Legal",
      pages: 110,
      downloads: 345,
      rating: 4.4,
      driveLink: "https://drive.google.com/file/d/your-link-14/view",
      thumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop&auto=format",
      tags: ["IPR", "Patents", "Legal"],
      isNew: false
    },
    {
      id: 15,
      title: "HVPE by Professor Sai Chandu",
      description: "Human Values and Professional Ethics comprehensive notes.",
      subject: "Ethics",
      category: "Ethics",
      pages: 125,
      downloads: 678,
      rating: 4.5,
      driveLink: "https://drive.google.com/file/d/your-link-15/view",
      thumbnail: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop&auto=format",
      tags: ["Ethics", "Values", "Professional"],
      isNew: false
    },
    {
      id: 16,
      title: "MEFA by Professor Sai Chandu K",
      description: "Managerial Economics and Financial Analysis complete course material.",
      subject: "Economics",
      category: "Economics",
      pages: 200,
      downloads: 890,
      rating: 4.7,
      driveLink: "https://drive.google.com/file/d/your-link-16/view",
      thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&auto=format",
      tags: ["Economics", "Finance", "Analysis"],
      isNew: true
    },
    {
      id: 17,
      title: "Supply Chain Management",
      description: "Complete SCM syllabus with all units covered comprehensively.",
      subject: "SCM",
      category: "Operations",
      pages: 175,
      downloads: 765,
      rating: 4.6,
      driveLink: "https://drive.google.com/file/d/your-link-17/view",
      thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop&auto=format",
      tags: ["Supply Chain", "Logistics", "Management"],
      isNew: false
    },
    {
      id: 18,
      title: "Total Quality Management",
      description: "TQM principles, tools, and implementation strategies for business excellence.",
      subject: "TQM",
      category: "Quality",
      pages: 140,
      downloads: 523,
      rating: 4.5,
      driveLink: "https://drive.google.com/file/d/your-link-18/view",
      thumbnail: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?w=400&h=300&fit=crop&auto=format",
      tags: ["Quality", "TQM", "Excellence"],
      isNew: false
    },
    {
      id: 19,
      title: "Management Science",
      description: "Quantitative approaches to management decision-making and problem-solving.",
      subject: "Management Science",
      category: "Management",
      pages: 160,
      downloads: 634,
      rating: 4.4,
      driveLink: "https://drive.google.com/file/d/your-link-19/view",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format",
      tags: ["Management Science", "Quantitative", "Decision Making"],
      isNew: false
    },
    {
      id: 20,
      title: "Constitutional Studies - Fundamental Rights",
      description: "Detailed study of fundamental rights and duties in Indian Constitution.",
      subject: "Constitution",
      category: "Legal",
      pages: 95,
      downloads: 387,
      rating: 4.3,
      driveLink: "https://drive.google.com/file/d/your-link-20/view",
      thumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop&auto=format",
      tags: ["Constitution", "Rights", "Legal"],
      isNew: false
    }
  ];

  // Get unique categories
  const categories = ['All', ...new Set(allENotesData.map(note => note.category))];

  // Filter and search functionality
  const filteredNotes = useMemo(() => {
    return allENotesData.filter(note => {
      const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           note.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || note.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Pagination
  const totalPages = Math.ceil(filteredNotes.length / itemsPerPage);
  const currentNotes = filteredNotes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDownload = (driveLink, title) => {
    window.open(driveLink, '_blank');
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <section id="e-notes" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Educational Resources & E-Notes
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
            Comprehensive collection of {allENotesData.length}+ study materials and e-notes designed specifically for MBA and management students. 
            These resources are based on my extensive teaching experience and practical industry knowledge.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{allENotesData.length}+</div>
              <div className="text-sm text-slate-600">Total Resources</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{categories.length - 1}</div>
              <div className="text-sm text-slate-600">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {allENotesData.reduce((sum, note) => sum + note.downloads, 0).toLocaleString()}+
              </div>
              <div className="text-sm text-slate-600">Total Downloads</div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search notes, subjects, or topics..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-slate-600 hover:bg-blue-50 border border-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Info */}
          <div className="mt-4 text-center text-slate-600">
            Showing {currentNotes.length} of {filteredNotes.length} resources
            {searchTerm && ` for "${searchTerm}"`}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </div>
        </div>

        {/* E-Notes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentNotes.map((note) => (
            <div
              key={note.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={note.thumbnail}
                  alt={note.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* New Badge */}
                {note.isNew && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                      New
                    </span>
                  </div>
                )}
                
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {note.subject}
                  </span>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white text-sm">
                    <div className="flex items-center">
                      <Icon name="FileText" size={14} className="mr-1" />
                      <span>{note.pages} pages</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Star" size={14} className="mr-1 fill-current" />
                      <span>{note.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2">
                  {note.title}
                </h3>
                <p className="text-slate-600 text-sm mb-3 line-clamp-2">
                  {note.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {note.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                  {note.tags.length > 3 && (
                    <span className="text-slate-400 text-xs">+{note.tags.length - 3}</span>
                  )}
                </div>

                {/* Stats and Download */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-sm text-slate-500">
                    <div className="flex items-center">
                      <Icon name="Download" size={14} className="mr-1" />
                      <span>{note.downloads}</span>
                    </div>
                  </div>
                  <Button
                    variant="default"
                    size="sm"
                    iconName="Download"
                    iconPosition="left"
                    onClick={() => handleDownload(note.driveLink, note.title)}
                    className="transform hover:scale-105 transition-transform duration-200"
                  >
                    Download
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mb-12">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-slate-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50"
            >
              <Icon name="ChevronLeft" size={16} />
            </button>
            
            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              if (
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1)
              ) {
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-lg ${
                      currentPage === page
                        ? 'bg-blue-600 text-white'
                        : 'border border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {page}
                  </button>
                );
              } else if (
                page === currentPage - 2 ||
                page === currentPage + 2
              ) {
                return <span key={page} className="px-2">...</span>;
              }
              return null;
            })}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-slate-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50"
            >
              <Icon name="ChevronRight" size={16} />
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredNotes.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-xl font-semibold text-slate-600 mb-2">No resources found</h3>
            <p className="text-slate-500 mb-4">
              Try adjusting your search terms or selecting a different category.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setCurrentPage(1);
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <Icon name="MessageSquare" size={48} color="#3b82f6" className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Need Specific Study Materials?
            </h3>
            <p className="text-slate-600 mb-6">
              Looking for specific topics, custom training materials, or have questions about the resources? 
              As someone with extensive experience in training and placement coordination, 
              I'm here to help you with tailored educational solutions.
            </p>
            <Button
              variant="outline"
              size="lg"
              iconName="Mail"
              iconPosition="left"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Contact for Custom Materials
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ENotesSection);