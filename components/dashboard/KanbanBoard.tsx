'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import NewJobModal from './NewJobModal';

const STAGES = ['Lead', 'Quoted', 'Booked', 'In Progress', 'Complete'] as const;
type Stage = (typeof STAGES)[number];

const STAGE_STYLES: Record<Stage, { border: string; badge: string; header: string }> = {
  Lead:         { border: 'border-[#3a3a3a]', badge: 'bg-[#3a3a3a] text-[#aaa]',           header: 'text-[#aaa]' },
  Quoted:       { border: 'border-blue-800',   badge: 'bg-blue-900/40 text-blue-300',         header: 'text-blue-300' },
  Booked:       { border: 'border-purple-800', badge: 'bg-purple-900/40 text-purple-300',     header: 'text-purple-300' },
  'In Progress':{ border: 'border-yellow-700', badge: 'bg-yellow-900/40 text-[#ffd100]',      header: 'text-[#ffd100]' },
  Complete:     { border: 'border-green-800',  badge: 'bg-green-900/40 text-green-400',       header: 'text-green-400' },
};

export type Job = {
  jobNumber: string;
  clientName: string;
  phone?: string;
  email?: string;
  address?: string;
  status: Stage;
  driveUrl?: string;
  notes?: string;
  createdDate?: string;
};

export default function KanbanBoard({ initialJobs }: { initialJobs: Job[] }) {
  const router = useRouter();
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [showNewJob, setShowNewJob] = useState(false);

  function jobsByStage(stage: Stage) {
    return jobs.filter((j) => j.status === stage);
  }

  async function moveJob(jobNumber: string, newStatus: Stage) {
    setJobs((prev) =>
      prev.map((j) => (j.jobNumber === jobNumber ? { ...j, status: newStatus } : j))
    );
    await fetch(`/api/jobs/${jobNumber}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus }),
    });
  }

  function onJobCreated(job: Job) {
    setJobs((prev) => [job, ...prev]);
    setShowNewJob(false);
  }

  return (
    <div>
      {/* Page header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-white text-2xl font-bold">Jobs</h1>
          <p className="text-[#555] text-sm mt-0.5">{jobs.length} total jobs</p>
        </div>
        <button
          onClick={() => setShowNewJob(true)}
          className="bg-[#ffd100] text-[#202020] font-semibold px-4 py-2 rounded-lg hover:bg-[#e6bc00] transition-colors text-sm"
        >
          + New Job
        </button>
      </div>

      {/* Kanban columns */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        {STAGES.map((stage) => {
          const stageJobs = jobsByStage(stage);
          const styles = STAGE_STYLES[stage];
          return (
            <div key={stage} className="flex-shrink-0 w-72">
              {/* Column header */}
              <div className="flex items-center justify-between mb-3">
                <span className={`text-sm font-semibold ${styles.header}`}>{stage}</span>
                <span className="text-xs text-[#555] bg-[#2a2a2a] px-2 py-0.5 rounded-full">
                  {stageJobs.length}
                </span>
              </div>

              {/* Cards */}
              <div className="space-y-3 min-h-[200px]">
                {stageJobs.length === 0 && (
                  <div className="border-2 border-dashed border-[#2a2a2a] rounded-xl h-20 flex items-center justify-center">
                    <span className="text-[#3a3a3a] text-xs">No jobs</span>
                  </div>
                )}
                {stageJobs.map((job) => (
                  <JobCard
                    key={job.jobNumber}
                    job={job}
                    styles={styles}
                    onMove={(newStage) => moveJob(job.jobNumber, newStage)}
                    onClick={() => router.push(`/dashboard/jobs/${job.jobNumber}`)}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {showNewJob && (
        <NewJobModal onClose={() => setShowNewJob(false)} onCreated={onJobCreated} />
      )}
    </div>
  );
}

function JobCard({
  job,
  styles,
  onMove,
  onClick,
}: {
  job: Job;
  styles: { border: string; badge: string };
  onMove: (stage: Stage) => void;
  onClick: () => void;
}) {
  const [showMove, setShowMove] = useState(false);

  return (
    <div
      className={`bg-[#202020] border ${styles.border} rounded-xl p-4 cursor-pointer hover:border-[#ffd100]/50 transition-all group relative`}
      onClick={onClick}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <span className="text-[#ffd100] font-mono text-xs font-bold">{job.jobNumber}</span>
        {job.driveUrl && (
          <a
            href={job.driveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-[#555] hover:text-[#ffd100] transition-colors text-xs"
            title="Open Drive folder"
          >
            📁
          </a>
        )}
      </div>

      <p className="text-white text-sm font-medium leading-snug">{job.clientName}</p>
      {job.address && (
        <p className="text-[#666] text-xs mt-1 truncate">{job.address}</p>
      )}
      {job.createdDate && (
        <p className="text-[#444] text-xs mt-2">{job.createdDate}</p>
      )}

      {/* Move stage button */}
      <div
        className="mt-3 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setShowMove(!showMove)}
          className="text-[#555] hover:text-[#888] text-xs transition-colors"
        >
          Move stage ▾
        </button>
        {showMove && (
          <div className="absolute left-0 top-6 bg-[#2a2a2a] border border-[#333] rounded-lg overflow-hidden z-10 w-40 shadow-xl">
            {STAGES.map((s) => (
              <button
                key={s}
                onClick={() => { onMove(s); setShowMove(false); }}
                className={`w-full text-left px-3 py-2 text-xs hover:bg-[#333] transition-colors ${
                  s === job.status ? 'text-[#ffd100]' : 'text-[#aaa]'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
