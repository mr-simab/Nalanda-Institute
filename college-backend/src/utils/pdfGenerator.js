import PDFDocument from 'pdfkit';

export const generateResultPDF = (result) => {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument();
      const chunks = [];

      doc.on('data', (chunk) => chunks.push(chunk));
      doc.on('end', () => resolve(Buffer.concat(chunks)));

      doc.fontSize(20).text('Nalanda Institute', { align: 'center' });
      doc.moveDown();
      doc.fontSize(16).text('Student Result', { align: 'center' });
      doc.moveDown();

      doc.fontSize(12);
      doc.text(`Student Name: ${result.studentName}`);
      doc.text(`Roll Number: ${result.rollNumber}`);
      doc.text(`Department: ${result.department}`);
      doc.text(`Semester: ${result.semester}`);
      doc.text(`Year: ${result.year}`);
      doc.moveDown();

      doc.fontSize(14).text('Subjects', { underline: true });
      doc.moveDown();

      result.subjects.forEach((subject) => {
        doc.text(`${subject.name}: ${subject.marks}/100`);
      });

      doc.moveDown();
      doc.fontSize(14).text(`Total Marks: ${result.totalMarks}/${result.maxMarks}`);
      doc.text(`Percentage: ${result.percentage.toFixed(2)}%`);
      doc.text(`Grade: ${result.grade}`);
      doc.text(`Status: ${result.status}`);

      doc.end();
    } catch (error) {
      reject(error);
    }
  });
};
