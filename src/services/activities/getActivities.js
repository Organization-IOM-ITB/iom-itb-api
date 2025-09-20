const { Activities } = require('../../models');
const { Op } = require('sequelize');

const GetActivities = async ({ slug = null, search = '', page = 1, limit = 10 }) => {
  if (slug) {
    try {
      const activity = await Activities.findOne({ where: { url: slug } });
      if (!activity) {
        return { message: `Kegiatan dengan slug ${slug} tidak ditemukan` };
      }
      return activity;
    } catch (error) {
      return { message: `Terjadi kesalahan: ${error.message}` };
    }
  }

  // Logika untuk pencarian semua activities
  const pageNumber = parseInt(page) || 1;
  const pageLimit = parseInt(limit);
  const offset = (pageNumber - 1) * pageLimit;

  const options = {
    where: {},
    limit: pageLimit,
    offset,
    order: [['createdAt', 'DESC']],
  };

  if (search) {
    options.where.title = { [Op.like]: `%${search}%` };
  }

  try {
    const { rows, count } = await Activities.findAndCountAll(options);

    return {
      data: rows,
      total: count,
      currentPage: pageNumber,
      totalPages: Math.ceil(count / pageLimit),
    };
  } catch (error) {
    console.error('Database error in getActivities:', error);
    
    // Check if it's a connection timeout error
    if (error.message.includes('ETIMEDOUT') || error.message.includes('connect')) {
      // Return empty data instead of throwing error for better UX
      return {
        data: [],
        total: 0,
        currentPage: pageNumber,
        totalPages: 0,
      };
    }
    
    throw new Error(`Gagal mengambil data Kegiatan: ${error.message}`);
  }
};

module.exports = GetActivities;
