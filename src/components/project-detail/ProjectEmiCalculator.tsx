import React, { useState, useMemo } from 'react';
import { Calculator, IndianRupee, Info } from 'lucide-react';
import { Project } from '@/types/project';

interface ProjectEmiCalculatorProps {
  project: Project;
}

export function ProjectEmiCalculator({ project }: ProjectEmiCalculatorProps) {
  const initialPrice = project.priceFrom || 5000000;
  const [propertyPrice, setPropertyPrice] = useState(initialPrice);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenureYears, setTenureYears] = useState(20);

  // EMI Calculation Formula: P * r * (1+r)^n / ((1+r)^n - 1)
  const calculation = useMemo(() => {
    const downPayment = (propertyPrice * downPaymentPercent) / 100;
    const principal = propertyPrice - downPayment;
    const monthlyRate = interestRate / 12 / 100;
    const totalMonths = tenureYears * 12;

    let emi = 0;
    if (monthlyRate > 0 && totalMonths > 0 && principal > 0) {
      emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
    }

    const totalPayment = emi * totalMonths;
    const totalInterest = Math.max(0, totalPayment - principal);

    return {
      downPayment,
      principal,
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalPayment: Math.round(totalPayment),
    };
  }, [propertyPrice, downPaymentPercent, interestRate, tenureYears]);

  return (
    <section className="py-16 md:py-24 bg-sigma-stone-100/60 border-b border-sigma-stone-200/60">
      <div className="container-content">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow text-sigma-blue-600">Financial Planning Tool</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-sigma-graphite-900 mt-1">
            Home Loan EMI Calculator
          </h2>
          <p className="mt-2 text-sm md:text-base text-sigma-stone-600">
            Estimate your monthly mortgage payments based on leading bank interest rates.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-8 border border-sigma-stone-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-1">
                <span>Property Price</span>
                <span className="text-sigma-blue-700 font-bold text-sm">₹{(propertyPrice / 100000).toFixed(2)} Lakhs</span>
              </div>
              <input
                type="range"
                min={3000000}
                max={20000000}
                step={100000}
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full accent-sigma-blue-600 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-1">
                <span>Down Payment ({downPaymentPercent}%)</span>
                <span className="text-sigma-graphite-900 font-bold text-xs">₹{(calculation.downPayment / 100000).toFixed(2)} Lakhs</span>
              </div>
              <input
                type="range"
                min={10}
                max={50}
                step={5}
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full accent-sigma-blue-600 cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-1">
                  <span>Interest Rate</span>
                  <span className="text-sigma-blue-700 font-bold">{interestRate}%</span>
                </div>
                <input
                  type="range"
                  min={7.5}
                  max={12}
                  step={0.1}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full accent-sigma-blue-600 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-1">
                  <span>Tenure</span>
                  <span className="text-sigma-blue-700 font-bold">{tenureYears} Years</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={30}
                  step={1}
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full accent-sigma-blue-600 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-sigma-blue-950 text-white rounded-2xl p-6 space-y-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sigma-amber-400">
              <Calculator className="h-4 w-4" />
              Estimated Monthly EMI
            </div>

            <div>
              <div className="text-3xl md:text-4xl font-extrabold font-serif text-white">
                ₹{calculation.emi.toLocaleString('en-IN')} <span className="text-xs font-sans font-medium text-sigma-stone-300">/ month</span>
              </div>
            </div>

            <div className="space-y-2 pt-3 border-t border-white/15 text-xs font-medium">
              <div className="flex justify-between">
                <span className="text-sigma-stone-300">Loan Principal Amount:</span>
                <span className="text-white font-bold">₹{(calculation.principal / 100000).toFixed(2)} Lakhs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sigma-stone-300">Total Interest Payable:</span>
                <span className="text-white font-bold">₹{(calculation.totalInterest / 100000).toFixed(2)} Lakhs</span>
              </div>
            </div>

            <div className="p-3 bg-white/10 rounded-xl flex items-start gap-2 text-[10px] text-sigma-stone-300 leading-relaxed">
              <Info className="h-3.5 w-3.5 text-sigma-amber-400 shrink-0 mt-0.5" />
              <span>
                Indicative EMI calculation. Actual loan terms depend on lender approval, credit evaluation, and applicable bank conditions.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
